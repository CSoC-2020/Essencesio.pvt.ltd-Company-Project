const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Blog  = require("../Model/Posts");
const checkAuth = require("../middleware/check-auth");


const router = express.Router();

const app = express();

router.get("/blogs:id", (req, res, next) => {
  Blog.findById(req.params.id).then( blog => {
    if(blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json("Blog not found");
    }
  });
});

router.get("/allBlog", (req, res, next) => {
  Blog.find().then ( blog => {
    if(blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json("Blog not found");
    }
  });
});

router.post("/createBlog", checkAuth, (req, res, next) => {
  const blog = new Blog ({
    title: req.body.title,
    image: req.body.image,
    author: req.body.author,
    body: req.body.body,
    authorId: req.body.authorId
  });
  console.log(blog);
  blog.save().then( result => {
    res.status(201).json({
      message: "Blog Created",
      result: result
    });
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

module.exports = router;
