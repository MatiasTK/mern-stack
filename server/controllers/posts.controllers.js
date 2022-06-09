import mongoose from 'mongoose';
import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.send(posts);
  } catch (error) {
    return res.sendStatus(500).json({ message: error });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newPost = new Post({ title, description });
    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    return res.sendStatus(500).json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.sendStatus(400);
    }
    // The new is used for getting the new updated post.
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPost) {
      return res.sendStatus(404);
    }
    return res.sendStatus(202);
  } catch (error) {
    return res.sendStatus(500).json({ message: error });
  }
};

export const deletePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.sendStatus(400);
    }
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.sendStatus(404);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500).json({ message: error });
  }
};

export const getPostById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.sendStatus(400);
    }
    const findedPost = await Post.findById(req.params.id);
    if (!findedPost) {
      return res.sendStatus(404);
    }
    return res.json(findedPost);
  } catch (error) {
    return res.sendStatus(500).json({ message: error });
  }
};
