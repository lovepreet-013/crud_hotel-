const express = require('express');

const router = express.Router();

const Post = require('../../models/Post')


//GET BACK ALL THE USERS DATA
router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
    }catch(err){
      res.json({message: err});
    }
})

//GET BACK SPECIFIC USERS DATA
router.get('/:postId', async (req, res) => {
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
      res.json({message: err});
    }
})

//CREATE THE NEW USER
router.post('/', async (req, res) => {
  console.log(req.body);
  const post =new Post({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
  try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
      res.json({message: err});
  }
})

//UPDATE SPECIFIC USERS DATA
router.patch('/:postId', async (req, res) => {
  try{
    const updatedPost = await Post.updateOne(
      { _id:req.params.postId },
      { $set : { email: req.body.email}}
      );
    res.json(updatedPost);
    }catch(err){
      res.json({message: err});
    }
})

//DELETE SPECIFIC USERS DATA
router.delete('/:postId', async (req, res) => {
  try{
    const removedPost = await Post.remove({ _id:req.params.postId });
    res.json(removedPost);
    }catch(err){
      res.json({message: err});
    }
})

module.exports = router;