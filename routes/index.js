var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Express Project' });
});

router.get('/datetime', (req, res) => {
  res.render(Date())
})
module.exports = router;
