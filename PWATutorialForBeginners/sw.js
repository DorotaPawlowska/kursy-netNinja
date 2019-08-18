const staticCacheName = 'site-static';
const assets = [
  '/PWATutorialForBeginners/',
  '/PWATutorialForBeginners/index.html',
  '/PWATutorialForBeginners/js/app.js',
  '/PWATutorialForBeginners/js/ui.js',
  '/PWATutorialForBeginners/js/materialize.min.js',
  '/PWATutorialForBeginners/css/styles.css',
  '/PWATutorialForBeginners/css/materialize.min.css',
  '/PWATutorialForBeginners/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// install service worker
self.addEventListener('install', evt => {
  // console.log('service worker has been installed');
  evt.waitUntil(
    caches.open(staticCacheName).then( cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  )

});

// activate event
self.addEventListener('activate', evt => {
  // console.log('service worker has been activated');

});

// fetch event
self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt);

});

