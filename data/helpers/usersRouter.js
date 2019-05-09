const express = require('express');

const Users = require('./userDb');
const Posts = require('./postDb');
const upName = require('../middleware/upName');
const usersRouter = express.Router();
//Get users
usersRouter.get('/', async (req, res) => {
    try{
        const users = await Users.get();
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users"});
    }
});
//Get users by id
usersRouter.get('/:id', async (req, res) => {
    try{
        const users = await Users.getById(req.params.id);
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users"});
    }
});
// Get posts from user by ID 

usersRouter.get('/:id/posts', async (req, res) => {
    try{
        const users = await Users.getUserPosts(req.params.id);
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users"});
    }
});


//Add a User
usersRouter.post('/', upName, async(req,res) => {
    try{
        const users = await Users.insert(req.body);
        res.status(201).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding user"});
    }
    });

//Delete a user
    usersRouter.delete('/:id', async (req, res) => {
        try{
        const users = await Users.remove(req.params.id);
    res.status(200).json({message: "User Removed", users});
        } catch (error) {
            res.status(500).json({message: "Error Deleting User"});
        }
    });


//Edit a user



// 
module.exports = usersRouter;