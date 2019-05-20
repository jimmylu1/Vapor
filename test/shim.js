global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

//probably do not need this file b/c jest version is old enough
