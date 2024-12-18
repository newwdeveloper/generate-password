const useHandleCopy = ({ password, setCopyMessage }) => {
  const handleCopyPassword = () => {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setCopyMessage("Password copied!"); // Show pop-up message
          setTimeout(() => {
            setCopyMessage(""); // Hide pop-up message after 2 seconds
          }, 2000);
        })
        .catch(() => {
          setCopyMessage("Failed to copy password!"); // Show error message
          setTimeout(() => {
            setCopyMessage(""); // Hide error message after 2 seconds
          }, 2000);
        });
    } else {
      setCopyMessage("No password to copy!"); // Show message if no password exists
      setTimeout(() => {
        setCopyMessage(""); // Hide message after 2 seconds
      }, 2000);
    }
  };

  return { handleCopyPassword };
};
export default useHandleCopy;
