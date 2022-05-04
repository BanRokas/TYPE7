import "dotenv/config";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: `http://localhost:${PORT}`,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

let isAuthed = (req, res, next) => {
  if(typeof req.headers.authorization !== "undefined"){
    const token = req.headers.authorization.split(" ")[1];
    const privateKey = process.env.SECRET_JWT_TOKEN;

    jwt.verify(token, privateKey, (err, decoded) =>{
      if(err){
        res.status(400).send({ error : "User ain't authorized to view this content." });
      } else {
        console.log(decoded);
        return next();
      }
    });
  } else {
    res.status(400).send({ error : "User ain't authorized to view this content." });
  }
}

app.get('/', (req, res) => {
  res.send("Hello fellas");
});

app.get('/secret', isAuthed, (req, res) => {
  res.send({ message : "Secret message for verified users."});
});

app.get('/readme', (req, res) => {
  res.send({ message : "Hello world!"});
});

app.get('/jwt', (req, res) => {
  const privateKey = process.env.SECRET_JWT_TOKEN;
  const token = jwt.sign({"raktoVardas":"duomenys"}, privateKey, { expiresIn: '1m'});
  res.send(token);
});



app.listen(PORT, ()=>console.log(`Server running on ${PORT}.`));
