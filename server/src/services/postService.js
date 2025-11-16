const supabase = require('../config/supabase');

const createPost = async (postData, userId) => {
  const { title, content, excerpt, metaTitle } = postData;
  if (!title || !content) throw new Error('Title and content required');
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  const { data, error } = await supabase
    .from('posts')
    .insert({ title, slug, content, excerpt: excerpt || null, meta_title: metaTitle || null, author_id: userId })
    .select('id, title, slug, content, excerpt, meta_title, created_at, updated_at, author:profiles!posts_author_id_fkey (email)')
    .single();
  if (error) throw new Error(error.message);
  return data;
};

const getPosts = async (page = 1, limit = 10) => {
  const from = (page - 1) * limit;
  const { data: posts, error: postsError } = await supabase
    .from('posts')
    .select('id, title, slug, content, excerpt, meta_title, created_at, updated_at, author:profiles!posts_author_id_fkey (email)')
    .range(from, from + limit - 1)
    .order('created_at', { ascending: false });
  if (postsError) throw new Error(postsError.message);

  const { count, error: countError } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true });
  if (countError) throw new Error(countError.message);

  return { posts, total: count };
};

const updatePost = async (id, postData, userId) => {
  const { title, content, excerpt, metaTitle } = postData;
  const slug = title ? title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') : undefined;
  const updateData = {
    title,
    content,
    excerpt: excerpt || null,
    meta_title: metaTitle || null,
    updated_at: new Date(),
  };
  if (slug) updateData.slug = slug;

  const { data, error } = await supabase
    .from('posts')
    .update(updateData)
    .eq('id', id)
    .eq('author_id', userId)
    .select('id, title, slug, content, excerpt, meta_title, created_at, updated_at, author:profiles!posts_author_id_fkey (email)')
    .single();
  if (error || !data) throw new Error('Post not found or unauthorized');
  return data;
};

const deletePost = async (id, userId) => {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id)
    .eq('author_id', userId);
  if (error) throw new Error('Post not found or unauthorized');
  return { message: 'Post deleted' };
};

// Returns ALL posts (as per your request)
const getMyPosts = async (userId) => {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, content, excerpt, meta_title, created_at, updated_at, author:profiles!posts_author_id_fkey (email)')
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getMyPosts,
};