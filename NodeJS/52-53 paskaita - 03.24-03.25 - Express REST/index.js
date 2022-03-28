const express = require("express");
const path = require("path");
const handlebar = require("express-handlebars");
const vartotojai = require("./vartotojai");

const app = express();

// HandleBars
app.engine('handlebars', handlebar.engine({defaultLayout: "main"}))
app.set('view engine', 'handlebars');
app.set('views', './views');

// Body parse'inimas naudojant Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home page route
app.get("/", (req, res) => res.render("home",{
  title: "Vartotoju aplikacija",
  vartotojai
}));

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