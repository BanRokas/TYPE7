import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mysql from 'mysql2/promise';
import sql_config from 'SQL_DB_Config.js';


// Variables
const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin : `http://localhost:${PORT}`,
  optionSuccessStatus: 200
};

// Set Ups
app.set('views', './views'); // maybe?
app.set('view engine', 'ejs');

app.use(express.static('public')); // be path gal?
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Routes
app.use('/', async (req, res) => {
  try {
    const con = await mysql.createConnection(sql_config);
    const [data] = con.query(`
      SQL COMMANDS
    `);
    console.log(data);
    res.send('Hallo');
  } catch(err) {
    res.send({error: err});
  } finally {
    con.end(); // close or end?
  }
});

// Run Server
app.listen(PORT, () => console.log(`Serveris veikia ant PORT:${PORT}`));