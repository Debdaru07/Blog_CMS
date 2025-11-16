import { marked } from 'marked';
import DOMPurify from 'dompurify';

marked.setOptions({ breaks: true });
export const renderMarkdown = (text) => DOMPurify.sanitize(marked(text));