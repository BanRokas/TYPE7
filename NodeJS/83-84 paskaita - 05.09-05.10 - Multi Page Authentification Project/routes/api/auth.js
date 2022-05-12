import express from 'express';
import bcrypt from "bcrypt";
import con from '../../SQL_Connect.js';

const router = express.Router();

router.post('/register', async (req, res) => {  
  try{
    if(createUser_validation(req.body)){
      const hashedPass = await bcrypt.hash(req.body.pass, 10);
      await con.query(`
        INSERT INTO user (email, password)
        VALUES (?, ?)
      `, [req.body.email, hashedPass]);
      res.redirect('/'); // pakeisti kai bus UI
    } else {
      res.send("Kažkas negerai su registracijos duomenimis.");
    }
  } catch(err) {
    res.status(500).send({error : `Susidūrėme su error'u: ${err}`});
  }
});

router.post('/login', async (req, res) => {
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
      // sukurti ir į cookies įdėti JWT
      res.send('Prisijungeme'); // pakeisti kai bus UI
    } else {
      res.status(400).send({error : `Netinkamas email arba password.`});
    }
  } catch (err){
    res.status(400).send({error: `Susidūrėme su error'u: ${err}`});
  }
});

let createUser_validation = body => {
  if(
    body.email.includes('@') &&
    body.email.includes('.') &&
    body.pass === body.passRepeat &&
    body.pass.length >= 8 &&
    /[0-9]/.test(body.pass) &&
    /[A-Z]/.test(body.pass) &&
    /[a-z]/.test(body.pass)
  ){
    return true;
  }
}

export default router;