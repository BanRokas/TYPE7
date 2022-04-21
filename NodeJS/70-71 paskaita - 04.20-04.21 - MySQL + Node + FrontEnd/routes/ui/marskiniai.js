import express from 'express';
import con from '../../SQL_Connect.js';

const router = express.Router();

router.get('/:size?', async (req, res) => {
  try {
    const limit = req.query.limit < 10 ? 10 : 
                  req.query.limit > 100 ? 100 : req.query.limit;
    const [data] = await con.query(`
      SELECT *
      FROM shirts
      ${req.params.size ? `WHERE size = ?` : ''}
      ORDER BY price
      LIMIT ${limit ? limit : 10}
    `, [req.params.size]);
    res.render('home', {
      marskiniai : data
    });
  } catch(e) {
    console.log(e);
  } 
  
});

export default router;