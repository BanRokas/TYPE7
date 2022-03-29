import express from 'express';
import data from '../../data.js';

const router = express.Router();

// Gauname visus duomenis iš data modulio
router.get('/', (req, res) => res.send(data));

export default router;
