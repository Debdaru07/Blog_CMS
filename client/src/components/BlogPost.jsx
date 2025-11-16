import React from 'react';
import ReactMarkdown from 'react-markdown';
import { renderMarkdown } from '../utils/markdown';

const BlogPost = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
    <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
    <small>By {post.author.email} on {new Date(post.created_at).toLocaleDateString()}</small>
  </article>
);

export default BlogPost;