const postService = require('../services/postService');

const getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { posts, total } = await postService.getPosts(page, limit);
    res.json({ posts, total, page, limit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, excerpt, metaTitle } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'Title and content required' });
    const post = await postService.createPost({ title, content, excerpt, meta_title: metaTitle }, req.user.id);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.updatePost(id, req.body, req.user.id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await postService.deletePost(id, req.user.id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getMyPosts = async (req, res) => {
  try {
    const posts = await postService.getMyPosts(req.user.id);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getMyPosts,
};