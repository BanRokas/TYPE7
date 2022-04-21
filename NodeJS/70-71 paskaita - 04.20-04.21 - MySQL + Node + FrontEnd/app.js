import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routerApiMarskiniai from './routes/api/marskiniai.js';
import { engine } from 'express-handlebars';
import path from 'path';

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
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/api/marskiniai', routerApiMarskiniai);


app.listen(PORT, () => console.log(`Serveris veikia ant ${PORT} porto`));