//require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
let studentRouter = require('./routes/student')

mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database!!"))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "Yooo"
    })
});
app.use('/students', studentRouter);

app.listen(3000, () => console.log("server started"));