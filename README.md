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
