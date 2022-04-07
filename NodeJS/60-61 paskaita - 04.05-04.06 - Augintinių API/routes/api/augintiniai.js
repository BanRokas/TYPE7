import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import express from 'express';

const router = express.Router();
const client = new MongoClient(process.env.DB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});
const augintiniuDuomenys = client.db('augintiniu_api').collection('augintiniai');

client.connect(err => {
  console.log(`Pavyko prisijungti prie DB naudojant URI: ${process.env.DB_URI}`);
});

router.get('/', async (req, res) => {
  try {
    const data = await augintiniuDuomenys.find().toArray();
    res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

router.post("/", async (req, res) =>{
  try{
    const naujasAugintinis = {
    }
    await augintiniuDuomenys.insertOne(naujasAugintinis);
    res.redirect('/augintiniai');
  } catch(err) {
    res.status(500).send({ err });
  }
});

router.get('/delete/:id', async (req,res) => {
  try{
    await augintiniuDuomenys.deleteOne({"_id":ObjectId(req.params.id)});
    res.redirect('/augintiniai');
  } catch(err) {
    res.status(500).send({ err });
  }
});

export default router;
