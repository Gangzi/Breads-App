const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

breads.get('/', (req, res) => {
    res.render('index',
        {
            breads: 'data from our models',
            username: 'John doE',
            asdf: 'jkl;'
        }
    )
    //res.send(Bread)


})
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})
module.exports = breads