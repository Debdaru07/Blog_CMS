const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getMyPosts,
} = require('../controllers/postsController');

const router = express.Router();

router.get('/', getPosts);  // Public
router.post('/', authenticateToken, createPost);
router.put('/:id', authenticateToken, updatePost);
router.delete('/:id', authenticateToken, deletePost);
router.get('/my', authenticateToken, getMyPosts);

module.exports = router;