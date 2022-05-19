var express = require('express');
const { stringify } = require('nodemon/lib/utils');
var router = express.Router();

let importBlogs = require("../public/sampleBlogs");
const listBlog = importBlogs.blogPosts;


router.get('/', function(req, res, next) {
    res.send('Welcome to blogs')
});

router.get('/all', (req, res) => {
    const sortOrder = req.query.sort;
    importBlogs.blogPosts.sort((a, b) => {
       const aCreatedat = a.createdAt
       const bCreatedAt = b.createdAt
       if (sortOrder === "asc") {
           if (aCreatedat < bCreatedAt) {
               return -1;
           }
           if (aCreatedat > bCreatedAt) {
               return 1;
           }
       }
       if (sortOrder === "desc") {
           if (aCreatedat > bCreatedAt) {
               return -1;
           }
           if (aCreatedat < bCreatedAt) {
               return 1;
           }
       }
       return 0;
    })

    res.json(importBlogs.blogPosts.map((el)=>{return el}));

});

router.get('/singleblog/:blogId', (req, res) => {
    const blogId = req.params.blogId;
    res.json(findBlogId(blogId));
});


router.get('/postBlog', function (req, res, next) {

    var data = req.body
    const newBlogs = data
    console.log(newBlogs)
    res.render('postBlog')
});

router.get('/displayBlogs', (req, res) => {
    res.render('displayBlogs')
})

router.post('/submit', function (req, res, next) {
    const data = req.body
    const today = new Date()

    const newPost = {
        createdAt: stringify(today),
        title: data.title,
        text: data.text,
        author: data.author,
        id: stringify(listBlog.length + 1)
    }
    console.log(newPost)
    listBlog.push(newPost)
    console.log('updated list', listBlog)
    res.send(ok)

});

const findBlogId = (blogId) => {
    const foundBlog = importBlogs.blogPosts.find((blog) => {
        return blog.id === blogId;
    });
    return foundBlog;
};

module.exports = router;