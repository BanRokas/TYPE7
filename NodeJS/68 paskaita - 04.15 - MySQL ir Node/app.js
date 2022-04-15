import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const PORT = process.env.PORT;
const mysqlConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
  port: process.env.DB_PORT
}

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    console.log("Success: ", con);
    res.send("Hellou. DB is ONNN");
  } catch(e) {
    console.log(e);
  }
});

app.listen(PORT, () => console.log(`Serveris veikia ant ${PORT} porto`));