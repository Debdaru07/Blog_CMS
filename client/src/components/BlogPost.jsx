import React from 'react';
import { renderMarkdown } from '../utils/markdown';  // Keep for MD rendering

const BlogPost = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
    <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
    <small>By {post.author.email} on {new Date(post.created_at).toLocaleDateString()}</small>
  </article>
);

export default BlogPost;