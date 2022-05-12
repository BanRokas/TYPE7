import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: `http://localhost:${PORT}`,
  optionsSuccessStatus: 200
}
const DB_connection_info = {
  user : process.env.DB_USER,
  password : process.env.DB_PASS,
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  database : process.env.DB
}

app.use(express.json());
app.use(express.urlencoded({
  extended : false
}));
app.use(cors(corsOptions));

app.get('/', async (req, res) => {
  const response = await fetch('https://randomuser.me/api/');
  const body = await response.json();
  const name = body.results[0].name.first;
  const connection = await mysql.createConnection(DB_connection_info);
  connection.query(`
    INSERT INTO names (name)
    VALUES (?)
  `, name);
  connection.end();
  res.send(body);
});

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));