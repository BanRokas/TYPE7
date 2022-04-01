import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const linkDataBase = `mongodb+srv://Rokas:Rokas1@cluster0.vneyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

MongoClient
  .connect(linkDataBase, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  .then(() => console.log("database connection success"))
  .catch((err) => console.log("db error:", err));

app.listen(3000, () => console.log(`Serv running on port 3000`));