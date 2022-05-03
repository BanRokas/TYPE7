import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import registerUser from './routes/api/registration.js';
import loginUser from './routes/api/login.js';

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: `http://localhost:${PORT}`,
  optionsSuccessStatus: 200
}

app.use(express.static(path.resolve('public')));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use('/api/register', registerUser);
app.use('/api/login', loginUser);

app.listen(PORT, () => console.log(`Serveris veikia ant ${PORT} porto.`));
