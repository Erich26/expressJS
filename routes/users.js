var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/datetime', (req, res) => {
  res.send(Date())
});

router.get('/myname', (req, res) => {
  res.send('Erich')
});

router.get('/myfavoritemovies', (req, res) => {
  const favoriteMovies = ["Lord of the Rings", 
                         "Harry Potter", 
                         "Fun with Dick and Jane"
]
  res.json(favoriteMovies);
})

module.exports = router;
