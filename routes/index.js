const express = require('express');
const Router = express.Router();

Router.get('/', (req,res,next) => {
    res.json({message: "We are connected"})
})

module.exports = Router;