import express from 'express';

const app = express();

app.get("/api", (req, res) => {
  res.json({ "pets" : ["cat", "dog", "dolphin", "turtle"] });
});

app.listen(5000, () => console.log("Server is running on PORT 5000"));