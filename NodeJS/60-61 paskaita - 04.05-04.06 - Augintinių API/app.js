import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import router from './routes/api/augintiniai.js';
import { engine } from 'express-handlebars';

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: `localhost:${PORT}`,
  optionsSuccessStatus: 200
};

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
  extended : false
}));

app.get('/', (req, res) =>{
  res.render('home');
});

app.use('/api/augintiniai', router);

// app.use(express.static(path.resolve('public'), {
//   extensions: ['html']
// }));

app.listen(PORT, () => console.log(`Application is running on PORT ${PORT}`));
