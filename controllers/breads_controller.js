const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

breads.get('/', (req, res) => {
  Bread.find()
    .then(foundBreads => {
      res.render('index',
        {
          breads: foundBreads,
          title: 'Index Page'
        }
      )
    })
})



//before Monngiise connect
/*res.render('Index',
  {
    breads: Bread,
    title: 'Index Page'
  }
)*/
//res.send(Bread)

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})
// EDIT b4 mongoose
//breads.get('/:indexArray/edit', (req, res) => {
 // res.render('edit', {
//    bread: Bread[req.params.indexArray],
 //   index: req.params.indexArray
//  })
//})
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id) 
    .then(foundBread => { 
      res.render('edit', {
        bread: foundBread 
      })
    })
})

breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('show', {
        bread: foundBread
      })
    }).catch(err => {
      res.send('404')
    })
})

/* BEFORE Mongoose
// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.send('Error')
  }
})
*/
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
      res.status(303).redirect('/breads')
    })
})

// DELETE b4 mongoose
//breads.delete('/:indexArray', (req, res) => {
// Bread.splice(req.params.indexArray, 1)
// res.status(303).redirect('/breads')
//})

// UPDATE
breads.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  //before mongoose
  //Bread[req.params.arrayIndex] = req.body
  //res.redirect(`/breads/${req.params.arrayIndex}`)
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBread => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    })
})


// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined//'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})





module.exports = breads