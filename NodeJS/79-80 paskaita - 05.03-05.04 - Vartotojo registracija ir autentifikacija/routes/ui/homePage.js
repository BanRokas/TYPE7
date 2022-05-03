import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    data : "duomenys"
  });
});

export default router;