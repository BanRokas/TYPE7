import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routerApiVardai from './routes/api/vardai.js';
import { engine } from 'express-handlebars';

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: `http://localhost:${PORT}`,
  optionsSuccessStatus: 200
}

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/api/vardai', routerApiVardai);

app.listen(PORT, () => console.log(`Serveris veikia ant ${PORT} porto.`));