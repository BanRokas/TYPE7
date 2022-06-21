import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get("/api/pets", async (req, res) => {

  const data = await fetch('http://localhost:8080/pets').then(data => data.json());

  console.log(data);

  res.json(data);
});

app.listen(5000, () => console.log("Server is running on PORT 5000"));