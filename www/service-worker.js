const CACHE_NAME = 'runedream-v1';
const ASSETS = [
  './',
  'index.html',
  'game.html',
  'upgrade.html',
  'settings.html',
  'css/style.css',
  'js/game.js',
  'js/orientation.js',
  'js/settings.js',
  'js/upgrade.js',
  'assets/song_Dreamy_Wisps.mp3',
  'assets/Blank Screen.png',
  'assets/Title Screen.png',
  'assets/button_exitgame.png',
  'assets/button_playgame.png',
  'assets/button_resetprogress.png',
  'assets/button_return.png',
  'assets/button_settings.png',
  'assets/button_timeattack.png',
  'assets/button_upgradeshop.png',
  'assets/Obs_yellowstar.png',
  'assets/Obs_yellowstar_break1.png',
  'assets/Obs_yellowstar_break2.png',
  'assets/Obs_yellowstar_break3.png',
  'assets/Obs_yellowstar_break4.png',
  'assets/RuneDreamAssets/Obs_blackstar.png',
  'assets/RuneDreamAssets/Obs_orangestar.png',
  'assets/RuneDreamAssets/Obs_orangestar_break.png',
  'assets/RuneDreamAssets/plat_clouds1.png',
  'assets/RuneDreamAssets/sprite_dash_1.png',
  'assets/RuneDreamAssets/sprite_run_1.png',
  'assets/RuneDreamAssets/sprite_run_2.png',
  'assets/RuneDreamAssets/sprite_run_3.png',
  'assets/RuneDreamAssets/sprite_run_4.png',
  'assets/RuneDreamAssets/sprite_run_5.png',
  'manifest.json',
  'service-worker.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
