import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import routerAug from './routes/api/augintiniai.js';
import routerSei from './routes/api/seimininkai.js';
import { engine } from 'express-handlebars';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: `localhost:${PORT}`,
  optionsSuccessStatus: 200
};
const client = new MongoClient(process.env.DB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});
client.connect();
const augintiniuDuomenys = client.db('augintiniu_api').collection('augintiniai');
const seimininkuDuomenys = client.db('augintiniu_api').collection('seimininkai');
const rikiavimas = {
  sort : new Object(),
  ascDesc : 1
}
const filtravimas = {
  // vardas : {
  //   $regex : /frazė/i
  // },
  // tipas : 'šuo',
  // amzius : {
  //   $gt : 3,
  //   $lt : 10
  // },
  // skiepytas : true
};

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.resolve('public')));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
  extended : false
}));

app.get('/', async (req, res) => {
  res.render('home');
});
app.get('/augintiniai', async (req, res) => {
  await client.connect();
  console.log(req.query);
  
  
  if(Object.keys(req.query).length !== 0){
    for (const key in filtravimas) {
      delete filtravimas[key];
    }
    // rikiavimas
    if(req.query.sort){
      rikiuoti(req.query.sort);
    }
    // filtravimas
    filtruoti(req.query);
  } else {
    for (const key in filtravimas) {
      delete filtravimas[key];
    }
  }
  console.log(filtravimas);

  res.render('augintiniai', {
    title: "Augintiniai",
    pets: await augintiniuDuomenys
    .find(filtravimas)
    .sort(rikiavimas.sort)
    .toArray()
  });
});
app.get('/seimininkai', async (req, res) => {
  res.render('seimininkai', {
    title: "Šeimininkai",
    seimininkai: await seimininkuDuomenys.find().toArray()
  });
});

let filtruoti = async (query) => {
  if(query.vardas){
    let regexas = new RegExp(query.vardas, 'i');
    filtravimas.vardas = { $regex : regexas };
  }
  if(query.tipas){
    filtravimas.tipas = query.tipas;
  }
  if(query.amzius_gt && query.amzius_lt){
    filtravimas.amzius = {
      $gt : Number(query.amzius_gt),
      $lt : Number(query.amzius_lt)
    };
  } else if(query.amzius_lt){
    filtravimas.amzius = {
      $lt : Number(query.amzius_lt)
    };
  } else if(query.amzius_gt){
    filtravimas.amzius = {
      $gt : Number(query.amzius_gt)
    };
  }
  if(query.skiepytas){
    filtravimas.skiepytas = (query.skiepytas === 'true');
  }
}

let rikiuoti = async (query) =>{
  if(Object.keys(rikiavimas.sort).length === 0){
    rikiavimas.ascDesc = 1;
    rikiavimas.sort[query] = rikiavimas.ascDesc;
  } else if(Object.keys(rikiavimas.sort)[0] === query){
    rikiavimas.ascDesc = rikiavimas.ascDesc * -1;
    rikiavimas.sort[query] = rikiavimas.ascDesc;
  } else if(Object.keys(rikiavimas.sort)[0] !== query){
    rikiavimas.ascDesc = 1;
    delete rikiavimas.sort[Object.keys(rikiavimas.sort)[0]];
    rikiavimas.sort[query] = rikiavimas.ascDesc;
  }
}

app.use('/api/augintiniai', routerAug);
app.use('/api/seimininkai', routerSei);

app.listen(PORT, () => console.log(`Application is running on PORT ${PORT}`));
