import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import router from './routes/api/augintiniai.js';

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: `localhost:${PORT}`,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
  extended : false
}));
app.use(express.static(path.resolve('public'), {
  extensions: ['html']
}));
app.use('/api/augintiniai', router);

app.listen(PORT, () => console.log(`Application is running on PORT ${PORT}`));
