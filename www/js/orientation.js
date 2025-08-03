document.addEventListener('DOMContentLoaded', () => {
  const lock = () => {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(() => {});
    }
  };
  lock();
  document.addEventListener('deviceready', lock);
  window.addEventListener('orientationchange', lock);
});
