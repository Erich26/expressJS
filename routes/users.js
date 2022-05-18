var express = require('express');
var router = express.Router();

var blogs = require("../public/sampleBlogs");
const blogPosts = blogs.blogPosts;


const users = [{
  name: "Erich",
  role: "Student"
}, {
  name: "James",
  role: "Instructor"
}]

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/myname', (req, res) => {
  const firstName = req.query.firstname
  const lastName = req.query.lastname
  res.send("The current user is: " + firstName + " " + lastName)
})

router.get('/getone/:userNumber', (req, res) => {
  const userNumber = req.params.userNumber
  const foundUser = users[userNumber];
  res.json(foundUser)
})


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/datetime', (req, res) => {
  res.send(Date())
});

router.get('/myfavoritemovies', (req, res) => {
  const favoriteMovies = ["Lord of the Rings", 
                         "Harry Potter", 
                         "Fun with Dick and Jane"
]
  res.json(favoriteMovies);
});



module.exports = router;
