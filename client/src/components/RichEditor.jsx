import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactMarkdown from 'react-markdown';
import { marked } from 'marked';  // Keep for MD conversion

const RichEditor = ({ value, onChange }) => {
  const [useMarkdown, setUseMarkdown] = useState(false);

  const handleContentChange = (newValue) => {
    onChange(useMarkdown ? newValue : newValue);
  };

  const handleMarkdownChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={useMarkdown}
          onChange={(e) => setUseMarkdown(e.target.checked)}
        />
        Use Markdown Editor
      </label>
      {!useMarkdown ? (
        <ReactQuill value={value} onChange={handleContentChange} />
      ) : (
        <>
          <textarea
            value={value}
            onChange={handleMarkdownChange}
            rows={10}
            style={{ width: '100%' }}
          />
          <div>
            <h4>Preview:</h4>
            <ReactMarkdown>{marked(value)}</ReactMarkdown>
          </div>
        </>
      )}
    </div>
  );
};

export default RichEditor;