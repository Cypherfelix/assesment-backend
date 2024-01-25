const express = require("express");
const mongoose = require("mongoose");
const PORT = 3002;

require("dotenv").config();

const app = express();

const routes = require("./routes/route")



app.use(express.json());

app.use('/api', routes);
app.get('/', (req, res)=>{
    res.status(200).json("Hello World");
})


const mongoUrl = process.env["DATABASE_URL"];


mongoose.connect(mongoUrl, {dbName: "savedMovies"}).then(() => {
})

const database = mongoose.connection;


database.on("error", (e) => {
    console.log(e);
})

database.once('connected', () => {
    console.log('Database connected');
});


app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
})

