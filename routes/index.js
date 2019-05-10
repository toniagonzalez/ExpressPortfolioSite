const express = require('express');
const router = express.Router();
const {data} = require('../data.json');
// const {projects} = data;


router.get('/', (req, res)=>{
  res.render('index', data);
})

router.get('/about', (req, res)=>{
  res.render('about');
})

router.get('/error', (req, res)=>{
  res.render('error');
})

router.get('/projects/:id', (req, res, next)=>{
  const id = parseInt(req.params.id);
  if(id >= data.projects.length){
    next();
  }
  res.render('projects', data.projects[id]);
})

module.exports = router;
