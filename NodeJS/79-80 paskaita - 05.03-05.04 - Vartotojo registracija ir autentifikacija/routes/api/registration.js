import express from 'express';
import bcrypt from "bcrypt";
import con from '../../SQL_Connect.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const [data] = await con.query(`
      SELECT *
      FROM user
    `);
    res.send(data);
  } catch(err){
    res.status(500).send({error : `Susidūrėme su error'u: ${err}`});
  }
});

router.post('/', async (req, res) => {  
  try{
    const hashedPass = await bcrypt.hash(req.body.pass, 10);
    if(createUser_validation(req.body)){
      await con.query(`
        INSERT INTO user (email, password)
        VALUES (?, ?)
      `, [req.body.email, hashedPass]);
      res.redirect('/api/register');
    } else {
      res.send("Kažkas negerai su registracijos duomenimis.");
    }
  } catch(err) {
    res.status(500).send({error : `Susidūrėme su error'u: ${err}`});
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
