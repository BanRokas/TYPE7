import express from 'express';
import bcrypt from 'bcrypt';
import con from '../../SQL_Connect.js';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const [data] = await con.query(`
      SELECT *
      FROM user
      WHERE email = ?
    `, [req.body.email]);
    if(data.length === 0){
      return res.status(400).send({error: `Netinkamas email arba password.`});
    }
    if(await bcrypt.compare(req.body.pass, data[0].password)){
      res.send('Prisijungeme');
      // res.header('auth-token', token).redirect('/somePage');
    } else {
      res.status(400).send({error : `Netinkamas email arba password.`});
    }
  } catch (err){
    res.status(400).send({error: `Susidūrėme su error'u: ${err}`});
  }
});

export default router;
