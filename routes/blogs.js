var express = require('express');
var router = express.Router();

var importBlogs = require("../public/sampleBlogs");

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

    res.json(importBlogs.blogPosts.map(el=>el.id));

});

router.get('singleBlog/:blogId', (req, res) => {
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