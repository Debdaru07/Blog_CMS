import { useState } from 'react';

export const useConfirm = () => {
  const [isConfirming, setIsConfirming] = useState(false);

  const confirmAction = (message, onConfirm) => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };

  return { confirmAction };
};