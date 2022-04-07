import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express';

const router = express.Router();
const client = new MongoClient(process.env.DB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});
const seimininkuDuomenys = client.db('augintiniu_api').collection('seimininkai');

client.connect();

router.get('/', async (req, res) => {
  try {
    const data = await seimininkuDuomenys.find().toArray();
    res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

router.post("/", async (req, res) =>{
  try{
    const naujasSeimininkas = {
      vardas : req.body.vardas,
      augintiniai : req.body.augintiniai.split(',')
    }
    await seimininkuDuomenys.insertOne(naujasSeimininkas);
    res.redirect('/seimininkai');
  } catch(err) {
    res.status(500).send({ err });
  }
});

export default router;
