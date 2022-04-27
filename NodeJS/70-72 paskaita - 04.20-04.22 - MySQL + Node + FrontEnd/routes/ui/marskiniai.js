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
      SELECT COUNT(*) AS rowsLength
      FROM shirts 
      ${req.params.size ? `WHERE size = ?` : ''}
    `, [req.params.size]);
    const workingDataLength = workingData[0].rowsLength;
    // limitas
    if(req.query.limit && req.query.limit !== puslapiavimas.limit){
      puslapiavimas.limit = Number(req.query.limit);
      puslapiavimas.skip = 0;
    }
    // skipinimas
    if(req.query.skip){
      if(puslapiavimas.skip === 0 && Number(req.query.skip) < 0){
      } else if(puslapiavimas.skip + Number(req.query.skip) >= workingDataLength){
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

    puslapiavimas.puslapiuKiekis = Math.ceil(workingDataLength / puslapiavimas.limit);
    puslapiavimas.esamasPuslapis = puslapiavimas.skip / puslapiavimas.limit + 1;
    puslapiavimas.pirmasPuslapis = puslapiavimas.esamasPuslapis === 1;
    puslapiavimas.paskutinisPuslapis = puslapiavimas.puslapiuKiekis === puslapiavimas.esamasPuslapis;
    puslapiavimas.minLimit = puslapiavimas.limit === 3;
    puslapiavimas.medLimit = puslapiavimas.limit === 5;
    puslapiavimas.maxLimit = puslapiavimas.limit === 10;
    
    res.render('home', {
      marskiniai : showData,
      puslapiavimas : puslapiavimas
    });
  } catch(e) {
    console.log(e);
  }
});

export default router;