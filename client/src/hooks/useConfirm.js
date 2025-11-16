export const useConfirm = () => {
  const confirmAction = (message, onConfirm) => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };

  return { confirmAction };
};