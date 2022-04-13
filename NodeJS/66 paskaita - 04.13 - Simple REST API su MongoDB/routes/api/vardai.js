import express from 'express';
import client from '../../mongoConnect.js';
import { ObjectId } from 'mongodb';

const router = express.Router();
const collection = client.db('vardai_db').collection('vardai');

router.get('/', async (req, res) => {
  try {
    res.send(await collection.find().toArray());
  } catch (err) {
    res.status(500).send({ err });
  }
});

export default router;
