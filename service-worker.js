/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "af47ef641293b54bfea9f84cfbe3f90e"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "5991ffefe1ed8376979bf154292c3fcc"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "5991ffefe1ed8376979bf154292c3fcc"
  },
  {
    "url": "assets/css/0.styles.e17ee226.css",
    "revision": "27dca556924529437f636ebaaa438051"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "c2c5210866fb83976c55bb9004abf476"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "5991ffefe1ed8376979bf154292c3fcc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3f3f6739.js",
    "revision": "2a51b468ae57b824a33037e5c0973ac9"
  },
  {
    "url": "assets/js/11.06c45be6.js",
    "revision": "09cb3548cb3b3f9b400bfdcdeb3f5f59"
  },
  {
    "url": "assets/js/12.840b05f7.js",
    "revision": "ed99a70c8d438a4ccdff1d43f05bccee"
  },
  {
    "url": "assets/js/13.18cf7203.js",
    "revision": "69c502022bc81332858dcd5640dd3272"
  },
  {
    "url": "assets/js/14.5b30f001.js",
    "revision": "5ef6248466bc84887e351f9c71a34dd8"
  },
  {
    "url": "assets/js/15.4b638093.js",
    "revision": "642104375cbf230ffe971c9cae89a0fc"
  },
  {
    "url": "assets/js/16.3ba1d8ca.js",
    "revision": "0ecea2964bb3b5205331e474381b4170"
  },
  {
    "url": "assets/js/17.6d408da1.js",
    "revision": "2a91f7091051708200fbf5f5bb6173d6"
  },
  {
    "url": "assets/js/18.0e7ebcd1.js",
    "revision": "1023d4123aa205e980e227944f6720da"
  },
  {
    "url": "assets/js/19.13d7564b.js",
    "revision": "c6bde8ca97b8d022d79fd46a305eb55b"
  },
  {
    "url": "assets/js/2.c48f6ac5.js",
    "revision": "d3e6410fb7a893f75864bb3261fbd50a"
  },
  {
    "url": "assets/js/20.9ac51fba.js",
    "revision": "2fdd9d6f6e9449ab900a205cb75a4c23"
  },
  {
    "url": "assets/js/21.2d500876.js",
    "revision": "b4645c91a25f57664b5ac5e06b542838"
  },
  {
    "url": "assets/js/22.af8ea074.js",
    "revision": "c6035249a42e6730d554476addf79a57"
  },
  {
    "url": "assets/js/23.e87aab82.js",
    "revision": "3c66bd69c7a84be5461aa71c3be0bd10"
  },
  {
    "url": "assets/js/3.3bbe9845.js",
    "revision": "3bd8956e0935f9f0e6a84e4b32908f6b"
  },
  {
    "url": "assets/js/4.fec85292.js",
    "revision": "02e5d22e8276be31ef4f6de41dd883fe"
  },
  {
    "url": "assets/js/5.5adab4f9.js",
    "revision": "49784d0aedb8cd7c865e683b971e90f2"
  },
  {
    "url": "assets/js/6.ab19288b.js",
    "revision": "ca11c76b7f46f2354d5fc6fcc865bfdb"
  },
  {
    "url": "assets/js/7.eff9fbd6.js",
    "revision": "0221ce99e3412c01e30db88aedbb83cc"
  },
  {
    "url": "assets/js/8.83db03f1.js",
    "revision": "23aa28eb427123a0f8aa64429a1707f6"
  },
  {
    "url": "assets/js/9.fb2371b9.js",
    "revision": "411c2432876b1fcdee0814bb82997a85"
  },
  {
    "url": "assets/js/app.9f7e32d5.js",
    "revision": "6e414f5d2633f6c7306da6d9b1793203"
  },
  {
    "url": "docs/1.0/auth/auth.html",
    "revision": "d0bae970a56c8e463fe4ebbea3368d07"
  },
  {
    "url": "docs/1.0/exception-handler/exception-handler.html",
    "revision": "4ae4ffb558e84b8e9347d116bf75e81f"
  },
  {
    "url": "docs/1.0/index.html",
    "revision": "0ce8b7fa0be81f4ee5cabbaa96fc2abb"
  },
  {
    "url": "docs/1.0/quickstart.html",
    "revision": "70847d18ac7cfa0fa4628580156f6b64"
  },
  {
    "url": "docs/1.0/repository-pattern/field.html",
    "revision": "1eabc653417b704cb19aa13efdefde7b"
  },
  {
    "url": "docs/1.0/repository-pattern/repository-pattern.html",
    "revision": "da99167827714a0fb82de2bee4b22a8c"
  },
  {
    "url": "docs/1.0/rest-methods/rest-methods.html",
    "revision": "53d624e4cf79ec20ea67a68f1f8f50d7"
  },
  {
    "url": "docs/1.0/search/search.html",
    "revision": "4a8e51098115f824fa4b8b523775f327"
  },
  {
    "url": "docs/2.0/auth/auth.html",
    "revision": "0b852dcb6eff1ddb33847e0b8aa94718"
  },
  {
    "url": "docs/2.0/exception-handler/exception-handler.html",
    "revision": "b100f53c16740e72fc9498ba6ff8d808"
  },
  {
    "url": "docs/2.0/index.html",
    "revision": "a5bb253df99ba6fcab4b859b74cdce3a"
  },
  {
    "url": "docs/2.0/quickstart.html",
    "revision": "4ceb87e6c70ae650b808f2fda893a42d"
  },
  {
    "url": "docs/2.0/repository-pattern/field.html",
    "revision": "331c4b50ba84eeb47560b10b07c5f875"
  },
  {
    "url": "docs/2.0/repository-pattern/repository-pattern.html",
    "revision": "bee0ada6085745752e5083a91d1d53e9"
  },
  {
    "url": "docs/2.0/rest-methods/rest-methods.html",
    "revision": "15d47c0581b332e6183b14be27bafbc2"
  },
  {
    "url": "docs/2.0/search/search.html",
    "revision": "39988f4108163bab8f4a1ecee213195d"
  },
  {
    "url": "docs/index.html",
    "revision": "7293e14277794ed00d0fbc1e6400c4d6"
  },
  {
    "url": "icon.png",
    "revision": "5991ffefe1ed8376979bf154292c3fcc"
  },
  {
    "url": "index.html",
    "revision": "228b30b5c69ea34f135c27f3824a6d79"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
