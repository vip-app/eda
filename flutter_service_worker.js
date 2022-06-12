'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "435c019f0e2d7f553c893ded0543b3a7",
".git/config": "2444b79fc176c72bb79bb271e512795f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2b677255f42a5f93a86c5739e9bcd61c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7158b967f13097adaa6baabff7b57fd6",
".git/logs/refs/heads/master": "7158b967f13097adaa6baabff7b57fd6",
".git/logs/refs/remotes/origin/master": "4283292ef31591e504958d6aa47f28d1",
".git/objects/00/67cddf326efba9a736f58e6af0130f7a96964c": "20224075d2b0f9197c365bc058b29cbd",
".git/objects/00/ba2232aef4f425999e376f04927bf66362f21d": "55c36488839e3488ec1bddd234526876",
".git/objects/03/8bdea7b21de9c0bba3265576bf3b6ffc074aa3": "43597a58f4df9845915edf2d432655da",
".git/objects/05/4830a9fe5534857849aa1ef4a48e7fc8a1ba8d": "5c682b4f1c52e7ef06bcf6ea45283ad5",
".git/objects/0b/039b99dade2972c9d9e1f88ce0ec92762f4a81": "e5f9affd8d2b41bb515ec058efffbff0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/e925db619cc47df26143adf3e8c430c7ae30ac": "55e188697bc64b7f6bec3a968dd9ca3f",
".git/objects/18/a1ec7d4747af22e63e88857cc5b673c29059e8": "ec20f2cee64515491d134a15e0976055",
".git/objects/19/46c481513934050440c33a3cda3b0cc7a627e1": "a5bd6a058bad3d150a8c7078b5d77b2b",
".git/objects/22/139d57b8400117f49c172f6c432915ea814616": "43f313a0b9e23e21c2e7027e2a4996b0",
".git/objects/22/2bab0dc8641efbe7bacf40ab96af6d1dffd675": "d31c012abf40b7dc6781a919b46f2ea8",
".git/objects/22/c2b61e224701265d6dde535681b8c06b00b198": "86ced9d94df3e98de9b4f4e870ae8eb9",
".git/objects/23/74c533fd3e8f2b1dbb33680941516e98d226f0": "fa8308987930ae1d1461d03193f4940d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/b6051177a3472f37defe74f849586f714a523a": "456c86285e1fdc469adfefa67595fcb6",
".git/objects/2a/7afc6ab93a1b78a8c82115f14645245c2b4170": "231c447f2e28293d4b645a0d8494ef46",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/33/eaae53716c75f2506ab24b03848a5e2f446037": "977cffb67e4e4d2fbf0d8f4ec2ab9a4b",
".git/objects/34/15de1e6fb300999986549ab85066e8a2831682": "8ca528af6235ed927508ac26fe29faa0",
".git/objects/37/bb57648b2b2b1bd504f858ee4eabbb13381720": "421f8068159139583d9dc558fb3b7e6a",
".git/objects/3a/25ac01fe02c1632488967ab0f91489a494ec7e": "ad457137bf2e99ba5257e00cbc648895",
".git/objects/3c/53c9cfe1b3ebc43f167934e14972953e97de20": "9cd7f2730a8cab3d0bf2284572f73391",
".git/objects/3d/983b85a3bb58083e4a5977ef142511bd9a582b": "c321cf446467fb3199c3838b6f64ae29",
".git/objects/3f/4f797f7cfcb0a0b11d533fccb3244b148e8201": "eda54a519c5533f4c54d00dd70682c09",
".git/objects/3f/58d51d18982515923cf93853b2c2964602ef0c": "a07b19f910e3a8f9dc17e91eabcc88e7",
".git/objects/43/ab9f94c7a3ff6e3e94ee4cbdbc1d8a7e7ce325": "24cb465ecf38879200cafa132f28f76a",
".git/objects/45/a8260fef4e0daa78af03b144f081242604a724": "99d81332fa62f539576d305989d7a050",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e6acd5d9e575f7bda8298580cfb814dfa12ae9": "1591b7431c2ac455e3b8f6d21a81c2f2",
".git/objects/4b/016dbf8324c548d8ffb5c0cb80fcedb28e1d9a": "dc96d74c9606a2ca430a9ca10050d135",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/0d07a797e123bfd122e7b51cf157a1b8832b85": "7dc32ecc4c156a57316a0fe4dbaf6d6d",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/9e543c683565254b97f20a51b102642f82bb03": "e6c49026c3310874687ca7a698304c19",
".git/objects/5a/006bc71f0f9a62bff9422931ba851aa50a87ae": "55224a8661361d6f059ced986f0f7f99",
".git/objects/5b/412647e415ada5bec507f35ceaba9a133e9b71": "75d09e01d3db3ba3cb3eb5772b98ff88",
".git/objects/5d/4c5f03a345e28e5755c9ae5ab3a2d1e7192ac5": "7fc691b73bfaa5d5a52ad8590039fffb",
".git/objects/63/9af059111b614fb13700cec877aeea71a99d58": "f9dafc1f1f5ae32ed073593c440c0e95",
".git/objects/6b/c442a9b08c488d015f2cb82c453b9406913217": "a92f82ad4efb09bb7c5499bdc9dadb30",
".git/objects/6c/a8a04bc12e3138684205cc7d7e296c9658ac8e": "72d21dd084deba3345be13d14dcc682b",
".git/objects/6e/587e20e63989cc62da22fbf4904ef415eb6455": "d5186c6ac8e45425c00120280ea11353",
".git/objects/70/10a59e0caffbbefaccbfa70869edd725a5a9db": "f534afe2f36e2dcb2b757e4cd6f37ed3",
".git/objects/73/db0d22a29ad37a6b6bb29046c139c33b4b2a71": "8592cbb755a14b9c4266f6cc39ae3658",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/922adce0c1c34ff84130f5110cb59ab8936b51": "36bc80c4a82e18b2b6d5ed4831f3c954",
".git/objects/78/af683ae537af447d7c53727bd268c8b9d81a31": "4d038ab7f756ae85e9d9ee0f5dd4ae18",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/83/76054d845727cccd2a925248d47ef1a092e4bd": "b3731b80cc6d3de2a9b78c607e355700",
".git/objects/8e/aee250b17f5a7287cc4219cc233f8e9cb10416": "00ca7f717260ba0dc10d6ea7fbe508de",
".git/objects/92/cbdf638962dd3b14fcc1b343d5c535cc07f545": "c6c727c1d25179bd0278c978a2375b4f",
".git/objects/95/28df008519ab8941a28f9245ba1de87967b8fd": "f39e687f55e0d87bd9a7c90ec8df0ab2",
".git/objects/97/f0101b2271b2ea7ebe472cdc89111160dec66c": "2d130b52551305ed55987d3bd1a04982",
".git/objects/98/dea0bf20747b03db6be001df8c4443b5e8f291": "83efb989ead04402dcbf5f76331091c6",
".git/objects/9b/511ea7936ab1df64cd11adbc2bdc5e0c0e9247": "88def85ccc5557aaeb5047ceb9c21655",
".git/objects/9d/2e177531a95c074e6f760a1f52c192dc6813e6": "12b2a0d46d71b62685f13e794d2cb503",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/118f2d8f7cd0cae812a72407cd30cf9ac1a92e": "1298989b71b6e6230823b394e7763591",
".git/objects/ab/2824f2eecf48a1cc88fef018c0e60c46fd73d1": "d8b542207b67266264b6f34cd4233ddd",
".git/objects/ad/4755f8809ed6391edcfda30bee2ff2f4ac4a96": "a023ca5c35c90cf3af27008935247aa0",
".git/objects/b0/b6309309cc684d25b4ec3122839c45154ff3ef": "6708d6ec8715e7bec2bb0cc7bde5441f",
".git/objects/b1/2e9e1fbcbd3082d73b27e1feac9eb4e2aaa6f9": "06378a78b6fb7e1295105d34102150d5",
".git/objects/b1/abb92d5a21948777a35094b8962cfb34cc1f1e": "fdb64b59ec0a6ae59a733a16e6140dfa",
".git/objects/b5/b37d01bab138f684483b4ad0111100c666a49f": "0260e988da36c899267a14967d7ed846",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/ba4c19a6d122dc84377821a5b309754014aa27": "8d37f8ef2ef1682b1e433332d3f8cf5e",
".git/objects/cb/d96a8a42972857c1188c4a8df10c963d50bb31": "87fddb12fc5d9cbe2fdec26b373802c7",
".git/objects/cc/8405f0dd8cc454a3c7d2fe2f1b7f1a74afe12e": "d0a8d1690cf2293c3cc8a727cb075b5e",
".git/objects/dd/13fe968f0bcf0ab8389d7768d0da7b844741ae": "d0b84d7b0a4c98e863d9bf695327e994",
".git/objects/dd/99d9b615afa405dfb9990523d25c20566dca4c": "9cbca42dcf34b46e2f05120b2699b6c9",
".git/objects/dd/ed53af9768f37e1e763369bd94791e2d36da97": "3d4027a8a4233c6dd26686fecfaab6e6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/422b6fe170dcde9fd92325ffd88f668e6a8f61": "af219bd43d70d8bb5625d8fb41adea21",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ee/fd006f9abc1c7dd70046a73f07284f600d0488": "2f3d582c7be1e69655be2ec9134c2c73",
".git/objects/ff/63b59757335181822f9268356c9c4ad390d9a1": "541f432d6fa1682b7a9c3f5e676afb08",
".git/refs/heads/master": "5a163e8ff0bd2f913d89083343124422",
".git/refs/remotes/origin/master": "5a163e8ff0bd2f913d89083343124422",
"assets/AssetManifest.json": "29326c1406e13b8116ae588b31fa1b82",
"assets/assets/images/android1.jpg": "b20c2ee3d29a36b10581a3a61989b114",
"assets/assets/images/android2.jpg": "d431b590e13b817c19a82034d0aedd7d",
"assets/assets/images/android3.jpg": "10a0243a79618128ad3ee387648fab1d",
"assets/assets/images/android4.jpg": "23f833ed1023ebd0a7ecd7fb2c4b066e",
"assets/assets/images/android5.jpg": "872f3beff9f1d73636203f6f55a75aa4",
"assets/assets/images/avatar.png": "3b5bb5dbbbd6381755bde72aadb85c36",
"assets/assets/images/ios1.jpg": "75e250ff0e25163f078074520e2ad9fe",
"assets/assets/images/ios2.jpg": "2a8bc15270873fee3a0d5969a18f31ed",
"assets/assets/images/ios3.jpg": "4aa84b46282741cfda3a6d600c1d3b74",
"assets/assets/images/ios4.jpg": "f7ba4d9a673263e90a8bfdfce4af0f78",
"assets/assets/images/Thumbs.db": "2496d775e19b7d22100965f7d0ddc65f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/loading.gif": "ff1db61bd90b3e0c966b840c70781623",
"assets/NOTICES": "ae99d6ccea939554a9ae1db08986cb5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/Thumbs.db": "58708c72a9afe62d508a1814f82f0eff",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"deliveryCalculator.html": "a42197915b913544246a8ab5a1a75482",
"deliveryCalculator.js": "fa7e309709edd73786b6b70211aede29",
"favicon.png": "9ebffa4aef94b2502f7b5fce1d0f101c",
"icons/Icon-192.png": "3b5bb5dbbbd6381755bde72aadb85c36",
"icons/Icon-512.png": "1a8814254e6b4fa07acde2c7e4ffef47",
"icons/Icon-maskable-192.png": "3b5bb5dbbbd6381755bde72aadb85c36",
"icons/Icon-maskable-512.png": "1a8814254e6b4fa07acde2c7e4ffef47",
"icons/Thumbs.db": "61ee575824c5328a6e89ce10087ce227",
"index.html": "0d822724f3fc4c1c5ba0ae14c9e24098",
"/": "0d822724f3fc4c1c5ba0ae14c9e24098",
"main.dart.js": "775451c60d6f6eee09830223a0409d1d",
"manifest.json": "a241a4ff620a279f642e308b73ec12c7",
"Thumbs.db": "83d56a9a83f31fc1c95b95ce9149c26a",
"version.json": "b04098f524c90c3429c3f55e290a7ab8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
