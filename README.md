# PWA-Demo

The goal is to create an app that uses geo locations and takes photos via camera. It needs the ability to store offline and then post when back online. 

Offline storage options...
Local storage -  synchronous, has no Web Worker support and is size and type (strings only) limited
Cookies -  synchronous, lack web worker support and are also size-limited
The File System API - only currently supported by Chrome
The most recommended option is Cache API and IndexedDB. Both are asynchronous, promise based, compatible with web workers and service workers. Cache API is promise based and works in Chrome, Firefox and Opera and in development for Edge. IndexedDB is event based, works everywhere (some issues with Safari 10), supports observers.

Considerations: 
Varying storage limitations of different browsers.

## Get started!

Build files.
```
yarn build
```

Build css files.
```
yarn build-css
```

Run app.
```
yarn start
```

Run css (in seperate tab)
```
yarn watch-css
```

## Deployment

This project is currently set up on firebase.
To deploy, run: 

```
firebase deploy
```

You should be able to view on https://pwa-demo-fbc8a.firebaseapp.com/
It normally takes a minute or two to update.

## Useful Links

https://developers.google.com/web/fundamentals/primers/service-workers/
https://developers.google.com/web/updates/2015/12/background-sync
https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
https://engineering.musefind.com/build-your-first-progressive-web-app-with-react-8e1449c575cd
https://medium.com/dev-channel/learn-how-to-build-a-pwa-in-under-5-minutes-c860ad406ed
https://developers.google.com/web/progressive-web-apps/checklist
https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa
https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api
https://medium.com/dev-channel/offline-storage-for-progressive-web-apps-70d52695513c
https://medium.com/@onejohi/introducing-geolocation-in-your-pwas-65713faba51a
https://codelabs.developers.google.com/codelabs/workbox-indexeddb/index.html?index=..%2F..%2Findex#0


