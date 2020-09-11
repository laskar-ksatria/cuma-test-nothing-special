const express = require('express');
const Router = express.Router();

Router.get('/', (req,res,next) => {
    res.json({message: "We are connected"})
});

Router.get('/adding', (req, res) => {
    res.json({message: "Adding router"})
})

Router.get('/adding-new', (req,res,next) => {
    res.json({message: "add new"})
})

module.exports = Router;