const staticCacheName = 'site-static-v4';
const dynamicCacheName = 'site-dynamic-v8';
const assets = [
  '/PWATutorialForBeginners/',
  '/PWATutorialForBeginners/index.html',
  '/PWATutorialForBeginners/js/app.js',
  '/PWATutorialForBeginners/js/ui.js',
  '/PWATutorialForBeginners/js/materialize.min.js',
  '/PWATutorialForBeginners/css/styles.css',
  '/PWATutorialForBeginners/css/materialize.min.css',
  '/PWATutorialForBeginners/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
  '/PWATutorialForBeginners/pages/fallback.html'
];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then( keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    })
  })
};

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
  evt.waitUntil(
    caches.keys().then( keys => {
      // console.log(keys);
      return Promise.all( keys
        .filter( key => key !== staticCacheName && key !== dynamicCacheName)
        .map( key => caches.delete(key)))
    })
  )
});

// fetch event
self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt);
  if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
    evt.respondWith(
      caches.match(evt.request).then( cacheRes => {
        return cacheRes || fetch(evt.request).then( fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            limitCacheSize(dynamicCacheName, 15);
            return fetchRes;
          })
        });
      }).catch(() => {
        if(evt.request.url.indexOf('.html') > -1){
          return caches.match('/PWATutorialForBeginners/pages/fallback.html');
        }
      })
    );
  }  
});
