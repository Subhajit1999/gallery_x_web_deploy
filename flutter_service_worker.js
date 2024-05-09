'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fefc72376c48b631d9a41478099bb9a5",
"index.html": "d04c45709762b1a5d3e294382402d2bb",
"/": "d04c45709762b1a5d3e294382402d2bb",
"main.dart.js": "720cccf48510b3575f7e5f49fc1d1790",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "530b2807d2114ccd7d9a3fdcc7fe60aa",
".git/ORIG_HEAD": "fc733607adbcf91a925f5d99ec67683e",
".git/config": "6280f37f6634e26b95219e274d5cd266",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/1c84d4f5ee77308e06bef35f112e484d8d7241": "ec21537e101160a526b35b4f869470fd",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/d7fb278f59a17371d1482d3741ed79c8d62311": "9e58939fd4cf4573da761b768e211693",
".git/objects/60/7054afebf5d80864daae4c0a7abbf52a5e9e83": "6fda8edbe223c7b4454ea838a72907ba",
".git/objects/05/d08490d3107ce9ea5e4a83e828af636039d2dd": "547b60863f978e6cbe190825e7a467f1",
".git/objects/ac/7ac1639fd3e5f4c1c90e197d9105340d5543f9": "53ba69deac5a70eb66502e0258fd431b",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d0/141e66d92d6d6fe2341310a02967af335a1da7": "7bbe7f2d251506def9c5785879136bdf",
".git/objects/b4/faf4f4d692223fa5771bb1d8aadeddb3ee5413": "a6f39c71e38f47af329a7ad032d559f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/89/9734e8a352e3acfb6a12398c4780f7783830af": "496d495d29c81acd2a7c17133a36f7b5",
".git/objects/28/cfb6b8cd304241c548e4ca25149a80022b5e19": "8981c79cb722d6f2e10e94ea975195a8",
".git/objects/7b/8a449aa593d4e5954bc09937fab3c39c11356d": "7e9ba69884b95197d9f32f2323d584ef",
".git/objects/8f/6ea929438b5e6c9455dcd2c0eadf4a9ffb6851": "58d07517c1269ecb6c7c98ddf6f1df4d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/e2a1bf00eb14b9fda56b28fa0c04a770fef184": "803d7c03b0714ad45934a1a0bfe97ee4",
".git/objects/4d/c822670aaba6d26b6aae00e0b1aed0c9916d8e": "d21fc9a9368fcb23159e30416cc749a0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/9114582935d52a045b33ed6cb712fff92e3848": "53d39efcdb437cd67e209c4412f07932",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/d1fdca34b913ab709f596236c1c4c43ac5940d": "2dfa8da3f33b81e3cfb3dfb8074802f9",
".git/objects/30/fdbd6de4b54a5512486f9814d23033c8677685": "313144a872c0b9aa042a1a4e15b097bf",
".git/objects/08/5e9eb1dd96fffb3dc27a7222217b0b779c168e": "5bd55f81b731694ba8c162a24ff04897",
".git/objects/08/865ea58215b5b356e4c23ebcff0f2d28994462": "f2b9c1cfcaefec6f74093ca91385a542",
".git/objects/99/07cd51844dc077723945a243cb08f5ac614d2d": "7b93ac0b37679083fad1fe711df86132",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/f0e1dbf1ac8a003967730ad92857cd1e0f29d7": "c9371c083286a3db835ceb56b22f156c",
".git/objects/b1/6a4684a03baac6dbb06d4d9522863abeca2d14": "9eb6d43cb36f5aae3bf3865df8b3d0cf",
".git/objects/d2/c57e7115024f99a79803a70d91e111c2c3743c": "87ac9377c9f403e4a26585a2a1b0f7f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f1/f98cc7abce8876844d72bc903eeb446bdb7285": "d338ec2fbed2124252762cf1f620937e",
".git/objects/41/66d71695d5ad510073f84e143a2486c99494a5": "edd6b4aceec41f9171bd2f02205e8ccb",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/bcb6b8042c8c042978ebcfcdcd9a5be6eb3243": "e3f5099378f953ea429ef3121bbcb542",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/82/2cec3497e29912c7c9cb95337557efaab80b55": "e17f73f2b745f3838f8323a371064c7c",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/22/b4d833e47a870abc87bf960cb519f1f55f62ec": "4c4d761dca9d35c064592423a4b4ad6e",
".git/objects/25/cc4b13bb2f8d30948588afd2a2138294e103e0": "74848472d51be155a2cef2db13ac43fb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41cd4bb98752b9b1cacbcd11cb9b5010",
".git/logs/refs/heads/main": "a3f38349247d697918705d9259662be2",
".git/logs/refs/remotes/origin/main": "eb10f2c0257e3b242e280c0a1d1498ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "86b5fe8eff4b5addb336b822eddac993",
".git/refs/remotes/origin/main": "86b5fe8eff4b5addb336b822eddac993",
".git/index": "be93c0f099f0321dcbb90721a90f8711",
".git/COMMIT_EDITMSG": "ca97e1dcff9012749984505108372c07",
".git/FETCH_HEAD": "2c8ac59b16e2291dcb148eb430734949",
"assets/AssetManifest.json": "71b265101d8a04f27154d78d6c936384",
"assets/NOTICES": "3fcafa922266b6aade838b27d4215191",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "3454e0cb4b9ae7b28e47a15900141fc0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "592b93fb0da20871bfe65c219d60f5c8",
"assets/fonts/MaterialIcons-Regular.otf": "f3f7aaef8955fdda4bcf3cfdbf9ee7e8",
"assets/assets/images/app_Icon_img.jpeg": "164bc37e94966a5f25ea40ac66658364",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
