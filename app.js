const express = require('express');
const cors = require("cors");
const movieRouter = require ("./routers/movieRouter");
const notFound = require ("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");

const app = express()
const { PORT, FE_URL } = process.env;


//middleware per file statici
app.use(express.static("public"));
//middleware per il parsing del req.body
app.use(express.json());
//middleware cors
app.use(
    cors({
    origin: FE_URL,
})
);

//ROUTES
app.use("/movies", movieRouter);

//MIDDLEWARES PER GESTIONE DEGLI ERRORI
app.use(notFound);
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})