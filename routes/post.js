const express = require("express");
const router = express.Router();

//import controller
const { createPost, getPosts ,getPostById,update, remove} = require("../controller/post");

router.post("/post", createPost);
router.get("/posts", getPosts);
router.get('/post/:slug', getPostById);
router.put('/post/:slug',update);
router.delete('/post/:slug',remove);

module.exports = router;
