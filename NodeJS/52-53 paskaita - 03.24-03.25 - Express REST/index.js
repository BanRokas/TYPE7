const express = require("express");
const path = require("path");

const app = express();

// Body parse'inimas naudojant Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Vartotojų API Routes
app.use("/api/vartotojai", require("./routes/api/vartotojai"));

// Nurodomas statinis aplankalas
app.use(express.static(path.join(__dirname, "public")));
// Nurodytas specifinis failas
/*app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serveris veikia ant ${PORT} porto.`));