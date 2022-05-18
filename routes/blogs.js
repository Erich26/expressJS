var express = require('express');
var router = express.Router();

var importBlogs = require("../public/sampleBlogs");

router.get('/', function(req, res, next) {
    res.send('Welcome to blogs')
});

router.get('/all', (req, res) => {
    res.json(importBlogs.blogPosts)
});

router.get('/:blogId', (req, res) => {
    const blogId = req.params.blogId;
    res.json(findBlogId(blogId));
});

const findBlogId = (blogId) => {
    const foundBlog = importBlogs.blogPosts.find((blog) => {
        return blog.id === blogId;
    });
    return foundBlog;
};

module.exports = router;