'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "788a4f18bcf97ec27b1380a0ca54a8e6",
"assets/FontManifest.json": "04e96002b616800f8b610f75e80af567",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "17da62b1a9e4a95fb0700c2730b8c4d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/statics/fonts/Lato/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/statics/images/add.png": "8bbf9f275b13f6b6c5c2a931d4a760d2",
"assets/statics/images/addmore.png": "ae5055dd2d26aafe2a67d79212a70558",
"assets/statics/images/admin.png": "7a1d916aa1938cffd0788c6ee257f07e",
"assets/statics/images/back.png": "81da71f5aa2252f1f484609fd0d43bb4",
"assets/statics/images/Background@2x.png": "a6acf238b85e6700536e8f4deb3f752a",
"assets/statics/images/bg.png": "08b678813965dab821ba371882d0f56b",
"assets/statics/images/copy.png": "5656e3c3106ced4088ca007653f2da49",
"assets/statics/images/createroom.png": "a41b001cb00c87314c2ca4b7f2158d9d",
"assets/statics/images/cross.png": "35e3a074eef00c3bc6d652147b201357",
"assets/statics/images/enter_room_code.png": "e99943292b86dcad04320653c1f40131",
"assets/statics/images/facebook.png": "563588a9c41d6c8acfb3c77f2f2b8fd2",
"assets/statics/images/google_plus.png": "fc552ea3efd3a81a84231e47b9277a94",
"assets/statics/images/howtoplay.png": "e59a97f96149d70ebc4f82447764245d",
"assets/statics/images/howtoplay_selected.png": "ffceef1793da09ecf83691f9df04d4ba",
"assets/statics/images/icon.png": "1f11514f41ddd91217f5834f72054f77",
"assets/statics/images/icon_selected.png": "3fdd935aeca00ed62494ad5ae64899d3",
"assets/statics/images/image.png": "38a83145b8b629c93f94617ea24746de",
"assets/statics/images/Image_1.png": "e0f150d73152538172a3eeebff761aa9",
"assets/statics/images/image_2.png": "8e159c7cdc1a91dde60867aac7ae7111",
"assets/statics/images/joinroom.png": "09e1547eb52d0eaa8778a4dc93ab68d2",
"assets/statics/images/logo_1.png": "22a45d9ead5df2629ac71bc29582ee37",
"assets/statics/images/logo_5.png": "307ec6ea1153313956c4830795432fff",
"assets/statics/images/logo_blue.png": "a4fef44b3554a328239df1ec56253bfe",
"assets/statics/images/logo_green.png": "b8c4e67ca0da285498c3154be4715aac",
"assets/statics/images/logo_red.png": "3b141185adf5113edac77b7cd2fddce6",
"assets/statics/images/lost%2520game.png": "ba0053699328a68741cf78b36309e551",
"assets/statics/images/minus.png": "e464d6d5259b34fbf46c61f0248920d1",
"assets/statics/images/numbers.png": "775b5814175b62d8f3d55dc36f297ab2",
"assets/statics/images/numbers2.png": "bc0e43be908917269e3269f55121c49f",
"assets/statics/images/option%2520bg.png": "373428b178a3d90a12f20da82ee6ef36",
"assets/statics/images/others.png": "e6b69e91b178f5668eb479a8ee853773",
"assets/statics/images/per.png": "22e2ae26f5a955fc8e9acb632deaed98",
"assets/statics/images/profile.png": "2611ce14ba615a9941d7e4848908aa89",
"assets/statics/images/ques.png": "9c236a47e8cfcfb283323e451eef367c",
"assets/statics/images/Radio_button.png": "d79b6ca7f9525f8736d7063403cf94ac",
"assets/statics/images/Radio_button_selected.png": "febe21e0b9784b76f68038823aa6e770",
"assets/statics/images/Rectangle%252094.png": "d6d27178d604b4c6f26d443154e1de3c",
"assets/statics/images/roomcode.png": "62f00a1b0f52f27f258440f32631e2c8",
"assets/statics/images/sad.png": "f17bc1482ae1213622f9b6f41a4732fd",
"assets/statics/images/selected%2520ques.png": "1f1ccbc9cf1a2db99b90ccaa51288df4",
"assets/statics/images/settings.png": "06cb5ff5a26fb5c5e2615974af3e4282",
"assets/statics/images/settings2.png": "0fc47355960b689fa77e2f57e654b7d8",
"assets/statics/images/share.png": "abff9a6d676edfb60b7ce99e3d440cd1",
"assets/statics/images/sorry_bg.png": "8a7e1980d472338f8bcba7e2016edabf",
"assets/statics/images/Splash.png": "4f93c24c910fb7c8679b358a67ade39e",
"assets/statics/images/team%2520member_bg.png": "049d8251e144653b7f341d6da8b5e648",
"assets/statics/images/team.png": "0006e5b2d863e65462fde13ae865874e",
"assets/statics/images/team_1.png": "f0818bed85862a82322e0fce768f341e",
"assets/statics/images/team_2.png": "8a22deda354d258400722dacd9bfac63",
"assets/statics/images/team_3.png": "0c80609b03ded9d448d6b2fa55abe610",
"assets/statics/images/team_bg.png": "b7358fc1d5ca353f2dceba0f7fc39e97",
"assets/statics/images/winner.png": "9895a828d4721c1172df269fffb6ca53",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "feb29fb989efd17222c47a92e4ca7840",
"/": "feb29fb989efd17222c47a92e4ca7840",
"main.dart.js": "11a70282557ecd6d755fe2df9879d75e",
"manifest.json": "30dd4543afdc7da65516c97d9e8247d2",
"version.json": "4c673f728674974f5ecaaf2bd1a2bbdc"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
