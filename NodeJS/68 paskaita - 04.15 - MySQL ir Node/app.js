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
    res.send(`Serveris veikia ant ${PORT} porto`);
  } catch(e) {
    console.log(e);
  }
});

app.get("/shirts/:size?", async (req, res) => {
  try {
    console.log(req.query);
    const limit = req.query.limit < 10 ? 10 : 
                  req.query.limit > 100 ? 100 : req.query.limit;
    const con = await mysql.createConnection(mysqlConfig);
    const [data] = await con.query(`
      SELECT *
      FROM shirts
      ${req.params.size ? `WHERE size = '${req.params.size}'` : ''}
      ORDER BY price
      LIMIT ${limit ? limit : 10}
    `);
    res.send(data);
  } catch(e) {
    console.log(e);
  }
});

app.post("/shirts", async (req, res) => {
  try {
    const i = req.query;
    const con = await mysql.createConnection(mysqlConfig);
    await con.query(`
      INSERT INTO
      shirts (brand, model, size, price)
      VALUES
      ('${i.brand}', '${i.model}', '${i.size}', ${i.price})
    `);
    res.redirect("/shirts");
  } catch(e) {
    console.log(e);
  }
});

app.listen(PORT, () => console.log(`Serveris veikia ant ${PORT} porto`));