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
  console.log(req.query);
  res.render('augintiniai', {
    title: "Augintiniai",
    pets: await augintiniuDuomenys.find().sort().toArray()
  });
});
app.get('/seimininkai', async (req, res) => {
  res.render('seimininkai', {
    title: "Šeimininkai",
    seimininkai: await seimininkuDuomenys.find().toArray()
  });
});

app.use('/api/augintiniai', routerAug);
app.use('/api/seimininkai', routerSei);

app.listen(PORT, () => console.log(`Application is running on PORT ${PORT}`));
