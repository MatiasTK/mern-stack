import Router from 'express';
import {
  getPosts, createPost, updatePost, deletePost, getPostById,
} from '../controllers/posts.controllers.js';

const router = Router();

// Get all posts
router.get('/posts', getPosts);

// Create Posts
router.post('/posts', createPost);

// Update post
router.put('/posts/:id', updatePost);

// Delete
router.delete('/posts/:id', deletePost);

// Get custom post
router.get('/posts/:id', getPostById);

export default router;
