const {Router} = require('express');
const {Level} = require('../models/index.js');
const { Op } = require('sequelize');
const {body, param, validationResult} = require('express-validator');
const levelRouter = Router();

//get all posts
levelRouter.get('/', async (req,res) => {
    try {
        let allLevels = await Level.findAll();
        res.send(allLevels);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);       
    }
})

//create a new post
levelRouter.post('/',
    body('levelData').notEmpty(),
    body('author').notEmpty(),
    checkErrors,
    async (req,res) => {
        try {
            console.log("POST")
            let newLevel = await Level.create({levelData: req.body.levelData, author: req.body.author ? req.body.author : " "});
            res.send(newLevel);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
)

//Middleware function that handles return errors - saves a few lines of code!
function checkErrors(req, res, next){
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }
    else next();
}

module.exports = levelRouter;