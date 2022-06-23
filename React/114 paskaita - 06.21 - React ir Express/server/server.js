import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/api/pets/:id?", async (req, res) => {
  const data = await fetch(`http://localhost:8080/pets/${req.params.id?req.params.id:''}`).then(data => data.json());
  const dataToReturn = data.length ? data.filter(pet => pet.archyvuotas !== true) : data;
  res.json(dataToReturn);
});

app.get("/api/meds", async (req, res) => {
  const data = await fetch('http://localhost:8080/medications').then(data => data.json());

  res.json(data);
});

app.post("/api/pets", async (req, res) => {
  fetch('http://localhost:8080/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(req.body)
  })
  res.json();
});

app.patch("/api/pets/:id", async (req, res) => {
  fetch(`http://localhost:8080/pets/${req.params.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(req.body)
  })
  res.json();
});

app.listen(5000, () => console.log("Server is running on PORT 5000"));