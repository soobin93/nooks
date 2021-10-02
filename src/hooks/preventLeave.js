const preventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = '';
  };

  const enableProtect = () => {
    console.log('preventLeave has been enabled');
    window.addEventListener('beforeunload', listener);
  };

  const disableProtect = () => {
    console.log('preventLeave has been disabled');
    window.removeEventListener('beforeunload', listener);
  };

  return [enableProtect, disableProtect];
};

export default preventLeave;
