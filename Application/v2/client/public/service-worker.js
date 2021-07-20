/*'./',
  './index.html',
  './manifest.json',
  './js/scripts.js'*/

const staticCache = 'site-static-v0.02';
const assets = [
  './',
  './index.html',
  './manifest.json'
];


//install
self.addEventListener('install', evt=> {
  //console.log('service worker is installed');
  evt.waitUntil(
    caches.open(staticCache).then(cache=> {
      console.log('caching assets');
      cache.addAll(assets);
    })
  );
});

//activate
self.addEventListener('activate', evt=> {
  //console.log('service worker is activated');
  evt.waitUntil(
    caches.keys().then(keys=> {
      //console.log(keys);
      return Promise.all(keys
        .filter(key=> key!== staticCache)
        .map(key=> caches.delete(key))
      )
    })
  );
});

//fetch
/*self.addEventListener('fetch', evt=> {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes=> {
      return cacheRes || fetch(evt.request);
    })
  );
});*/

self.addEventListener('fetch',(fetching)=>{   
  fetching.respondWith(
    caches.match(fetching.request.url).then((response)=>{
      console.log('Service Worker: Fetching resource '+fetching.request.url);
      return response||fetch(fetching.request).then((response)=>{
        console.log('Service Worker: Resource '+fetching.request.url+' not available in cache');
        return caches.open(staticCache).then((cache)=>{
            console.log('Service Worker: Caching (new) resource '+fetching.request.url);
            cache.put(fetching.request,response.clone());
          return response;
        });
      }).catch(()=> caches.match('./pages/offline.html'))     

    })
  );
  console.log('Service Worker: User made a request, fetching.');
});




/*const cacheName='catalogue-cache';
const appFiles=[
  '/'
];

self.addEventListener('install',installing=>{
    //Put important offline files in cache on installation of the service worker
    installing.waitUntil(
      caches.open(cacheName).then(cache=>{
        console.log('Service Worker: Caching important offline files');
        return cache.addAll(appFiles);
      })
    );
    console.log('Service Worker: I am being installed, hello world!');
  });
  
  self.addEventListener('activate',(activating)=>{	
    console.log('Service Worker: All systems online, ready to go!');
  });
  
  self.addEventListener('fetch',(fetching)=>{   
    fetching.respondWith(
      caches.match(fetching.request.url).then((response)=>{
        console.log('Service Worker: Fetching resource '+fetching.request.url);
        return response||fetch(fetching.request).then((response)=>{
          console.log('Service Worker: Resource '+fetching.request.url+' not available in cache');
          return caches.open(cacheName).then((cache)=>{
              console.log('Service Worker: Caching (new) resource '+fetching.request.url);
              cache.put(fetching.request,response.clone());
            return response;
          });
        }).catch(function(){      
          console.log('Service Worker: Fetching online failed, HAALLPPPP!!!');
          //Do something else with the request (respond with a different cached file)
        })
      })
    );
    console.log('Service Worker: User threw a ball, I need to fetch it!');
  });
  
  self.addEventListener('push',(pushing)=>{
    if(pushing.data){
      pushdata=JSON.parse(pushing.data.text());		
      console.log('Service Worker: I received this:',pushdata);
      if((pushdata['title']!='')&&(pushdata['message']!='')){			
        const options={ body:pushdata['message'] }
        self.registration.showNotification(pushdata['title'],options);
        console.log('Service Worker: I made a notification for the user');
      } else {
        console.log('Service Worker: I didn't make a notification for the user, not all the info was there :(');			
      }
    }


    console.log('Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :(');
  })
  */