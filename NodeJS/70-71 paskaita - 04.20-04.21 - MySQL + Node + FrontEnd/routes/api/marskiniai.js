import express from 'express';
import con from '../../SQL_Connect.js';

const router = express.Router();
const PORT = process.env.PORT || 8080;

router.get("/:size?", async (req, res) => {
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
    res.send(data);
  } catch(e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const i = req.query;
    // await con.query(`
    //   INSERT INTO
    //   shirts (brand, model, size, price)
    //   VALUES
    //   (?, ?, ?, ?)
    // `, [i.brand, i.model, i.size, i.price]);
    await con.query(`
      INSERT INTO
      shirts SET ?
    `, {
        brand: i.brand,
        model: i.model,
        size: i.size,
        price: i.price
      });
    res.redirect("/shirts");
  } catch(e) {
    console.log(e);
  }
});

export default router;