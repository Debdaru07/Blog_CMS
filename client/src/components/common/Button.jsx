import React from 'react';

const Button = ({ children, onClick, disabled, variant = 'primary' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      background: variant === 'primary' ? '#007bff' : '#6c757d',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
    }}
  >
    {children}
  </button>
);

export default Button;