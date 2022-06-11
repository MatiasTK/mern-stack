import mongoose from 'mongoose';
import fs from 'fs';
import imageUpload from '../libs/imgurUpload.js';
import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.send(posts);
  } catch (error) {
    return res.sendStatus(500).json({ message: error });
  }
};

// TODO: fix upload when client specifies content-type
export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    let image = null;

    if (req.files) {
      const result = await imageUpload(req.files.image.tempFilePath, title, description);
      fs.unlinkSync(req.files.image.tempFilePath);
      image = {
        url: result.data.link,
        public_id: result.data.id,
      };
    }

    const newPost = new Post({ title, description, image });
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
