import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

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
app.use('/', (req, res) => {
  res.send('Hallo');
});

// Run Server
app.listen(PORT, () => console.log(`Serveris veikia ant PORT:${PORT}`));