import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/api/pets", async (req, res) => {
  const data = await fetch('http://localhost:8080/pets').then(data => data.json());
  const dataToReturn = data.filter(pet => 
    pet.archyvuotas !== true
  );
  res.json(dataToReturn);
});

app.get("/api/meds", async (req, res) => {
  const data = await fetch('http://localhost:8080/medications').then(data => data.json());

  res.json(data);
});

app.post("/api/pets", async (req, res) => {
  console.log(req.body);
  fetch('http://localhost:8080/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(req.body)
  })
  res.json();
});

app.listen(5000, () => console.log("Server is running on PORT 5000"));