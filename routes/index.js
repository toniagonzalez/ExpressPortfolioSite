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

router.get('/projects/:id', (req, res, next)=>{
  const id = parseInt(req.params.id);
  if(data.projects.includes(id) === false){
    next();
  }
  res.render('projects', data.projects[id]);
})

module.exports = router;
