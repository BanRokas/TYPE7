import 'dotenv/config';
import express from 'express';
import path from 'path';
import asmenuPath from './routes/api/asmenys.js';

const app = express();

// Static files
app.use(express.static(path.join('public')));

// Kreipiames i path'us
app.use('/api/asmenys', asmenuPath);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveris veikia ant ${PORT} porto.`));
