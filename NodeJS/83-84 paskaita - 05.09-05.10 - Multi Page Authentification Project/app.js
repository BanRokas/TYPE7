import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { engine } from 'express-handlebars';
import cookieParser from 'cookie-parser';

import authUser from './routes/api/auth.js';

import homePage from './routes/ui/homePage.js';
import registerPage from './routes/ui/registerPage.js';
import loginPage from './routes/ui/loginPage.js';

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: `http://localhost:${PORT}`,
  optionsSuccessStatus: 200
}

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.resolve('public')));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use('/', homePage);
app.use('/login', loginPage);
app.use('/register', registerPage);
app.use('/api/auth', authUser);

app.listen(PORT, () => console.log(`Serveris veikia ant ${PORT} porto.`));
