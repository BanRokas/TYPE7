var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home',
    menuId : 'haha',
    css: 'home.css',
    data : ['labas', 'rytas', 'suraitytas']
  });
});

/* GET about us page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About',
    menuId : 'about',
    css: 'about.css'
  });
});

/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
    menuId : 'contact',
    css: 'contact.css'
  });
});

module.exports = router;
