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
  const id = Math.abs(parseInt(req.params.id));
  if(id >= data.projects.length){
      const err = new Error('Not Found');
      return next();
  }
  else{
  res.render('projects', data.projects[id]);
  }
})


module.exports = router;
