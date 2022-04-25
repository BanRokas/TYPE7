import express from 'express';
import con from '../../SQL_Connect.js';

const router = express.Router();
const puslapiavimas = {
  limit : 10,
  skip : 0
};

router.get('/:size?', async (req, res) => {
  try {
    const [workingData] = await con.query(`
      SELECT *
      FROM shirts 
      ${req.params.size ? `WHERE size = ?` : ''}
    `, [req.params.size]);
    // limitas
    if(req.query.limit && req.query.limit !== puslapiavimas.limit){
      puslapiavimas.limit = req.query.limit;
      puslapiavimas.skip = 0;
    }
    // skipinimas
    if(req.query.skip){
      if(puslapiavimas.skip === 0 && Number(req.query.skip) < 0){
      } else if(puslapiavimas.skip + Number(req.query.skip) >= workingData.length){
      } else {
        puslapiavimas.skip += Number(req.query.skip);
      }
    }

    const [showData] = await con.query(`
      SELECT *
      FROM shirts
      ${req.params.size ? `WHERE size = ?` : ''}
      ORDER BY price
      LIMIT ${puslapiavimas.limit} 
      OFFSET ${puslapiavimas.skip}
    `, [req.params.size]);

    const puslapiai = {
      duomenuKiekis : showData.length,
      puslapiuKiekis : Math.ceil(workingData.length / puslapiavimas.limit),
      rodymoKiekis : puslapiavimas.limit
    }

    res.render('home', {
      marskiniai : showData,
      puslapiavimas : puslapiai
    });
  } catch(e) {
    console.log(e);
  }
});

export default router;