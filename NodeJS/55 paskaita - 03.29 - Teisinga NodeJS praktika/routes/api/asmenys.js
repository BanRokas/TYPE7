import express from 'express';
import data from '../../data.js';

const router = express.Router();

// Gauname visus duomenis iš data modulio
router.get('/', (req, res) => res.send(data));

// Gauname pagal markę filtruotus automobilius
router.get('/car=:car', (req, res) => res.send(data.filter((asmuo) => asmuo.car.toLowerCase() === req.params.car.toLowerCase())));

// Gauname visus el paštus
router.get('/email', (req, res) => res.send(data.map((asmuo) => asmuo.email)));

// Gauname visų moterų vardus
router.get('/moterys', (req, res) => res.send(data.filter((asmuo) => asmuo.gender === 'Female').map((moteris) => `${moteris.first_name} ${moteris.last_name}`)));

// Gauname visas moteris kurios vairuoja nurodytą mašiną
router.get('/moterys=:car', (req, res) => res.send(data.filter((asmuo) => asmuo.gender === 'Female').filter((moteris) => moteris.car.toLowerCase() === req.params.car.toLowerCase())));

export default router;
