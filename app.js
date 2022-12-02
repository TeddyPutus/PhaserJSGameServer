const express = require('express');
const cors = require('cors');
const levelRouter = require('./routes/levelRouter.js');
const db = require('./db/db.js');
const seed = require('./db/seed'); //this will be our set up file for some dummy data
const app = express();

app.use(express.urlencoded({ extended: false }));;
app.use(cors());
app.use(express.json());
app.use('/levels', levelRouter);


app.listen(5001, async () => {
    try {
        await seed();
        console.log("Server listening on post 5001");
    } catch (error) {
        console.log(error);
    }
})
