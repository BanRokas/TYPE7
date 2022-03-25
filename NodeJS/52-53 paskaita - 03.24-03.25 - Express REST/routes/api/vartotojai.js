const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const vartotojai = require("../../vartotojai");

// Gauname visus duomenis iš vartotojai modulio
router.get("/", (req, res) => res.json(vartotojai));

// Gauname nurodytą duomenį iš vartotojai modulio
router.get("/:id", (req, res) => {
  const rastasID = vartotojai.some(vartotojas => vartotojas.id.toString() === req.params.id.toString());

  /*const found = vartotojai.some(item => item.id.toString() === req.params.id.toString())
  if (found) res.json(vartotojai.filter(item => item.id.toString() === req.params.id.toString()))*/

  if(rastasID){ 
    res.json(vartotojai.filter(vartotojas => vartotojas.id.toString() === req.params.id.toString()));
  } else {
    res.status(400).json({ msg: `Nebuvo rastas vartotojas su id ${req.params.id.toString()}` });
  }
});

// Sukuriame naują vartotoją
router.post("/", (req, res) =>{
  const naujasVartotojas = {
    id : uuid.v4(),
    vardas : req.body.vardas,
    pavarde : req.body.pavarde,
    email : req.body.email
  };

  if(!naujasVartotojas.vardas || !naujasVartotojas.pavarde || !naujasVartotojas.email){
    return res.status(400).json({ msg: `Prašome užpildyti visus informacijos laukus.` });
  }

  vartotojai.push(naujasVartotojas);
  res.send(vartotojai);
});

// Redaguojame pasirinktą vartotoją
router.put("/:id", (req, res) => {
  const rastasID = vartotojai.some(vartotojas => vartotojas.id === parseInt(req.params.id));

  if(rastasID){
    const redaguojamaInformacija = req.body;
    vartotojai.forEach(vartotojas => {
      if(vartotojas.id === parseInt(req.params.id)){
        // redaguojamaInformacija.vardas ? vartotojas.vardas = redaguojamaInformacija.vardas : null;
        // if(redaguojamaInformacija.vardas) vartotojas.vardas = redaguojamaInformacija.vardas;
        vartotojas.vardas = redaguojamaInformacija.vardas ? redaguojamaInformacija.vardas : vartotojas.vardas;
        vartotojas.pavarde = redaguojamaInformacija.pavarde ? redaguojamaInformacija.pavarde : vartotojas.pavarde;
        vartotojas.email = redaguojamaInformacija.email ? redaguojamaInformacija.email : vartotojas.email;

        res.json({ msg: `Vartotojas ${vartotojas.id} koreguotas:`, vartotojas });
      }
    });
  } else {
    res.status(400).json({ msg: `Nebuvo rastas vartotojas su id ${req.params.id}` });
  }
});

// Ištriname vartotoją pagal nurodytą id
router.delete("/:id", (req, res) => {
  const rastasID = vartotojai.some(vartotojas => vartotojas.id.toString() === req.params.id.toString());

  if(rastasID){
    res.json({
      msg : `Buvo ištrintas vartotojas su id ${req.params.id.toString()}`,
      vartotojas : vartotojai.filter(vartotojas => vartotojas.id.toString() === req.params.id.toString())
    });
    //vartotojai.splice(vartotojai.filter(vartotojas => vartotojas.id.toString() !== req.params.id.toString()), 1)
    vartotojai.forEach((vartotojas, i) => {
      if(vartotojas.id.toString() === req.params.id.toString()){
        vartotojai.splice(i, 1);
      }
    })
  } else {
    res.status(400).json({ msg: `Nebuvo rastas vartotojas su id ${req.params.id.toString()}` });
  }
});

module.exports = router;