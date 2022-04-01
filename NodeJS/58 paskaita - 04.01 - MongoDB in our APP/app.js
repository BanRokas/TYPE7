import 'dotenv/config';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 8080;
const client = new MongoClient(process.env.URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  }
);

let get = async () => {
  /*let kiekis = await client.db('blog').collection('posts').estimatedDocumentCount();
  await client.db('blog').collection('posts').insertOne(
    {
      pavadinimas: "Postas iš app",
      body: "Susikuriau postą iš aplikacijos, YAY.",
      autorius: "Rokas",
      data: Date(),
      kiekis: kiekis+1
    }
  )*/
  /*await client.db('asmenys').collection('vardai').insertMany([
    {
      vardas : "Rokas",
      vardadienis : '09-16',
      sventas : true
    },{
      vardas : "Petras",
      vardadienis : '06-29',
      sventas : true
    },{
      vardas : "Aloyzas",
      vardadienis : '06-21',
      sventas : true
    },{
      vardas : "Dainius",
      vardadienis : '11-19',
      sventas : false
    },{
      vardas : "Gediminas",
      vardadienis : '06-27',
      sventas : false
    }
  ]);*/
  const myDB = await client.db('asmenys').collection('vardai')
    .find({vardadienis : {$regex : "06-"}}).toArray();
  console.log(myDB);
};

client.connect( (err) => {
  console.log(`Prisijungėme prie MongoDB.`);
  get();
});

app.listen(PORT, () => console.log(`App is running on ${PORT} PORT.`));