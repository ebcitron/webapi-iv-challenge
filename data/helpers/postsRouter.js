const express = require('express');


const Posts = require('./postDb');

const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
    try{
        const posts = await Posts.get(req.query);
        res.status(200).json({posts});
    } catch (error) {
        res.status(500).json({ message: "Error retrieving Posts"});
    }
});



module.exports = postsRouter;