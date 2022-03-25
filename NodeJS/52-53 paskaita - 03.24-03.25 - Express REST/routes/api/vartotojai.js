const express = require("express");
const router = express.Router();
const vartotojai = require("../../vartotojai");

// Gauname visus duomenis iš vartotojai modulio
router.get("/", (req, res) => res.json(vartotojai));

// Gauname nurodytą duomenį iš vartotojai modulio
router.get("/:id", (req, res) => {
  const rastasID = vartotojai.some(vartotojas => vartotojas.id === parseInt(req.params.id));

  if(rastasID){
    res.json(vartotojai.filter(vartotojas => vartotojas.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `Nebuvo rastas vartotojas su id ${req.params.id}` });
  }
});

// Sukuriame naują vartotoją
router.post("/", (req, res) =>{
  res.send(req.body);
});

module.exports = router;