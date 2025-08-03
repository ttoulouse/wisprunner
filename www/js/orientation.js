document.addEventListener('DOMContentLoaded', () => {
  const lock = () => {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(() => {});
    }
  };

  const goFull = () => {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  document.body.addEventListener('click', goFull, { once: true });

  lock();
  document.addEventListener('deviceready', lock);
  window.addEventListener('orientationchange', lock);
});
