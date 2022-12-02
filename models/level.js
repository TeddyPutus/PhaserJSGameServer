//import our db, Model, DataTypes
const { db, DataTypes } = require('../db/db.js')

//Creating a User child class from the Model parent class
const Level = db.define("levels", {
    author: DataTypes.STRING,
    levelData : DataTypes.JSON
});

//exports
module.exports = { Level }