'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b157823b4a6e02a81e5ce570525333db",
"assets/AssetManifest.bin.json": "2779841a2d50664b91569627477d5195",
"assets/AssetManifest.json": "1ce2d2acb88d03f6b12d8204098abd5a",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/android.svg": "a5edf188314ff37a4f513eaccb8d546b",
"assets/assets/icons/apple.svg": "6be40eb4dcaeafda971f070ef687ac8e",
"assets/assets/icons/concept.svg": "1d2ab33390f87572191ab36a2f4912cd",
"assets/assets/icons/contact.png": "e3b1aca81c02dd72dfd9a842c5512a82",
"assets/assets/icons/dark.png": "34b9b410330efc014dac0df01b222a9e",
"assets/assets/icons/database.svg": "af66f234a398197845eac15cc5bfe961",
"assets/assets/icons/design.svg": "b9c1d12b86f6f5a1b1d564b6403b177f",
"assets/assets/icons/desktop.png": "a8c4253b875ee527f03f0229f6fb5373",
"assets/assets/icons/dev.svg": "b14707ec638fce2d61ee308153066dd1",
"assets/assets/icons/experience.png": "1ca4fc99b3f6fdfbe8ffb675051ce7a1",
"assets/assets/icons/extra.svg": "3fb07c94f8a4146abb2f266a9e5b229f",
"assets/assets/icons/firebase.svg": "22f18d9c95d010b8b98930eb0e602978",
"assets/assets/icons/flutter.svg": "fe8fc92df24e337a48b940b4f1753ade",
"assets/assets/icons/home.png": "8848d51a04d7f272187ec179f7def64a",
"assets/assets/icons/light.png": "e9912f4715e49b9933978c2adcaafe0f",
"assets/assets/icons/map.svg": "b1e04382dab1ba99ac4fb9595e21bec8",
"assets/assets/icons/mobile&web.svg": "a52728da45f566090d7b296297c533f6",
"assets/assets/icons/mobile1.png": "eb57a84eff09da998ea0b74bf1b7813a",
"assets/assets/icons/project.png": "fe02d5cd0c46dd85e8caa850bf6c154b",
"assets/assets/icons/skill.png": "938ab509e9d4b0a807004779a561e5c7",
"assets/assets/icons/state.svg": "f79db439a4f4ab26642706b01276444b",
"assets/assets/icons/storage.svg": "81d33565398c7a0820e9f478c4d87582",
"assets/assets/icons/test.svg": "464bb0814d1417ab36ee64d7c91569d4",
"assets/assets/icons/web.png": "347373e1a6a441790f90efb4bb689909",
"assets/assets/icons/website.svg": "9cd94a52a52a97e7c48dff52a4b4eb1d",
"assets/assets/imgs/3.png": "a11e6389fc6bfbd21fda3984ac366f66",
"assets/assets/imgs/aug/1.jpg": "4ecfedca80997107b96cde7c809021ea",
"assets/assets/imgs/aug/2.jpg": "139d84b8bf75d918bdd0330b6a08a0d1",
"assets/assets/imgs/aug/3.jpg": "0bdb8e960172111feab6db285f3e927a",
"assets/assets/imgs/aug/4.jpg": "cc76efffb4113f2b72a35d6c4b8f1cd3",
"assets/assets/imgs/aug/5.jpg": "474e0790e9ea188f65edde356a8bf6eb",
"assets/assets/imgs/aug/6.jpg": "ee359744d4ee472f3e93269127af277a",
"assets/assets/imgs/aug/aug.png": "d63c3b399fa11a2dead7521466ed20e9",
"assets/assets/imgs/aug/logo.png": "3bb8697dd5eb6bc41c458418c8ec791c",
"assets/assets/imgs/bookly/1.jpg": "84564d72512a096d92152df765d14b48",
"assets/assets/imgs/bookly/2.jpg": "4208a98424d5b935b8e47181cd1fa3d7",
"assets/assets/imgs/bookly/3.jpg": "1ed8ba6619cebabdaee1a508de4ec7ad",
"assets/assets/imgs/bookly/4.jpg": "e47e9d4bea083bb2ecd1a4ea87750e5f",
"assets/assets/imgs/bookly/5.jpg": "6b3bd90200dfefb07b56720aaa352e08",
"assets/assets/imgs/bookly/6.jpg": "af5709d35760a2ab51a3e38a0b78b7ac",
"assets/assets/imgs/bookly/7.jpg": "2da893aa826c16b2404a4ed9edc643c3",
"assets/assets/imgs/bookly/8.jpg": "c421c6c379d3925715423a6692089680",
"assets/assets/imgs/bookly/bookly.png": "fc89a9b993c858733b66c1c7daaa4771",
"assets/assets/imgs/bookly/logo.png": "68ac501f37f3454f42633f0a2eab2155",
"assets/assets/imgs/chat/1.jpg": "2956408334fa6325ba2fd8995e9cd24c",
"assets/assets/imgs/chat/2.jpg": "b751181433a2493bc6aa4973b030c681",
"assets/assets/imgs/chat/3.jpg": "4d50a843174b9cbf391487a67e3ba6ab",
"assets/assets/imgs/chat/4.jpg": "4db2950de11e045e25b615ab9f48b046",
"assets/assets/imgs/chat/5.jpg": "40efb8bd905c576c9ffe331b6c543624",
"assets/assets/imgs/chat/6.jpg": "d24c8390b3c7b849b3ccabdb933f5a29",
"assets/assets/imgs/chat/chat.png": "ecabe615d50e0c257425bf9c6358a2cd",
"assets/assets/imgs/chat/logo.png": "1096dd6fb7b8c74baf503a854e875c27",
"assets/assets/imgs/chatAuthFirebase/1.jpeg": "d13a140cfb10d12ba74888ff967cf135",
"assets/assets/imgs/chatAuthFirebase/2.jpeg": "067bacede1f68ab7320e20cf24e44b35",
"assets/assets/imgs/chatAuthFirebase/3.jpeg": "8261bae34cef89dec8b86563ce564041",
"assets/assets/imgs/chatAuthFirebase/4.jpg": "9224e832e6f84dc537897f34127e367f",
"assets/assets/imgs/chatAuthFirebase/5.jpg": "d997037f755f61a6b6056c33ac02014b",
"assets/assets/imgs/chatAuthFirebase/6.jpeg": "7c01469f8174da7fd2091a7bdd0288b8",
"assets/assets/imgs/chatAuthFirebase/chatAuthFirebase.png": "ba06fb766a7b104b78ec0908777afbdb",
"assets/assets/imgs/chatAuthFirebase/logo.png": "fa6f08a7d9e09aa13727bc7a943e4996",
"assets/assets/imgs/coffee/1.jpg": "3cfc295429cf006905e1dba4e690aeac",
"assets/assets/imgs/coffee/2.jpg": "fd99a4b604009e3f855058ee210d16e4",
"assets/assets/imgs/coffee/3.jpg": "9371aa9af1dbb670930f3f64f417917d",
"assets/assets/imgs/coffee/4.jpg": "c60fe0d9a8843bec7a2ca551af8e565d",
"assets/assets/imgs/coffee/5.jpg": "e2db6007fb64fa9a0f98343a82a12efa",
"assets/assets/imgs/coffee/6.jpg": "da1d0f9de282efa20ad630829757764e",
"assets/assets/imgs/coffee/coffee.png": "583df8fbcd46e2d51e4cffdf8a5f1b3d",
"assets/assets/imgs/coffee/logo.png": "12e54dcaeb4fceba4a2bae0be98a3612",
"assets/assets/imgs/El72ny/1.jpg": "f593c33c3a72dcb2d6d0a8e8034da494",
"assets/assets/imgs/El72ny/2.jpg": "1a71d4b7d894d668107d2082cb3581c1",
"assets/assets/imgs/El72ny/3.jpg": "0b171a70815638d76d3e329473dc0ede",
"assets/assets/imgs/El72ny/4.jpg": "e406f4e983aa5e66ac6e47cd4eaa94d4",
"assets/assets/imgs/El72ny/5.jpg": "b17672198c850e2f504c5286c8cd3127",
"assets/assets/imgs/El72ny/6.jpg": "dd394421c7781e3aef3a32bd08c8d38d",
"assets/assets/imgs/El72ny/El72ny.png": "d242cb1bd6f43046a56513e437052263",
"assets/assets/imgs/El72ny/logo.png": "1096dd6fb7b8c74baf503a854e875c27",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/gpt/1.jpg": "9e1e4fbdb8ef0c6b656a93ad3d0218b5",
"assets/assets/imgs/gpt/2.jpg": "951e8e31a6da9c13f66da2ecfdb8cca5",
"assets/assets/imgs/gpt/3.jpg": "eb286a193cdda0ed0c6113b4d8f83a3d",
"assets/assets/imgs/gpt/4.jpg": "951e8e31a6da9c13f66da2ecfdb8cca5",
"assets/assets/imgs/gpt/5.jpg": "951e8e31a6da9c13f66da2ecfdb8cca5",
"assets/assets/imgs/gpt/6.jpg": "9e1e4fbdb8ef0c6b656a93ad3d0218b5",
"assets/assets/imgs/gpt/gpt.png": "2e0842d96ac61d7da2d9db9730648f3d",
"assets/assets/imgs/gpt/logo.png": "3968cc69447bad44485ea5afc6075100",
"assets/assets/imgs/hospital/1.jpg": "c445a5b0dc1b9a3e3d4127069ba9e438",
"assets/assets/imgs/hospital/2.jpg": "bff9527fbc90cd7f3e13f07b8edfcf22",
"assets/assets/imgs/hospital/3.jpg": "34cbd2e0c84679c13cfbb6d25dd7a794",
"assets/assets/imgs/hospital/4.jpg": "da48dac2c82bf2b0b85e8846d9abc0d2",
"assets/assets/imgs/hospital/5.jpg": "ce80ce31da8fb103f292f4a123db603c",
"assets/assets/imgs/hospital/6.jpg": "34cbd2e0c84679c13cfbb6d25dd7a794",
"assets/assets/imgs/hospital/hos.png": "f235c5e8208c3029a134a4d197317821",
"assets/assets/imgs/hospital/logo.png": "1096dd6fb7b8c74baf503a854e875c27",
"assets/assets/imgs/hub/1.jpg": "2c08fde5ec16483877f02ca5796f9404",
"assets/assets/imgs/hub/2.jpg": "fc7b2085711feb655874bf8c2be6d3dc",
"assets/assets/imgs/hub/3.jpg": "c400f5ffd5efbcc3fcc922240bbd07b2",
"assets/assets/imgs/hub/4.jpg": "644d9cdb846b067fb7fc13699aeb239e",
"assets/assets/imgs/hub/5.jpg": "20ee06c12c932d4d9f124bc77c321c3c",
"assets/assets/imgs/hub/6.jpg": "0d7ba950b900ae8bc4dae3352f744f8c",
"assets/assets/imgs/hub/hub.png": "4a0026f6df90d44a76c4ed59aa3e82e9",
"assets/assets/imgs/hub/logo.png": "12fcfbab98782e3ecc00b7650aaa36e9",
"assets/assets/imgs/logo.png": "a13fb9b3d9153530986ced275faed9ba",
"assets/assets/imgs/meal/1.jpeg": "2df2e8eff059f380b3fc566cf0f4baec",
"assets/assets/imgs/meal/2.jpeg": "326b78efcef90eeeeda9791dab69daaf",
"assets/assets/imgs/meal/3.jpeg": "022d2374c9f648e102ba5636b3bd25d7",
"assets/assets/imgs/meal/4.jpeg": "431ebff9338fd9fb06063f211856e503",
"assets/assets/imgs/meal/5.jpeg": "6e4393289ffdffdb1ce5162cb0522a6c",
"assets/assets/imgs/meal/6.jpeg": "90ed695146fb11e70bc3a9604ca8dd15",
"assets/assets/imgs/meal/7.jpeg": "b100cb890110f3428a4e33289434af99",
"assets/assets/imgs/meal/8.jpeg": "f0f34f77b5eab6a5625dee4fd7f9a337",
"assets/assets/imgs/meal/logo.png": "7a98c0d4fe017fc4b66d172d0a45cea7",
"assets/assets/imgs/meal/meal.png": "d4b79d7fd2946fc3a303d12c80305caf",
"assets/assets/imgs/myPic.png": "d275d4bef917ee458f01be4408be6c51",
"assets/assets/imgs/note/1.jpg": "fc7a1ffef23983b7e858da76a231795a",
"assets/assets/imgs/note/2.jpg": "fede372887cfa075e118fe88994afc94",
"assets/assets/imgs/note/3.jpg": "d3920e050d4dcc1e8596e109fbe175cc",
"assets/assets/imgs/note/4.jpg": "ca7f709e73cdc912d7fa20a785b321df",
"assets/assets/imgs/note/5.jpg": "748bbfceb5079a91edfb25317d950401",
"assets/assets/imgs/note/6.jpg": "860c448beaca4b445c76cc47e330d8c8",
"assets/assets/imgs/note/logo.png": "7bf3c12142d682f6cd23a7f613cd2e15",
"assets/assets/imgs/note/note.png": "d8cec7b2455ebd1cdb4640510c9e4e32",
"assets/assets/imgs/rick/1.jpg": "fe1badf9fa42100a8c1ed98740c0f17f",
"assets/assets/imgs/rick/2.jpg": "174661d0dd8ea67a5f8f8b4182e78e03",
"assets/assets/imgs/rick/3.jpg": "795292087e6717eeafafb67c63a33df9",
"assets/assets/imgs/rick/3h.jpg": "f15e38018e2388b22012ec354f13e063",
"assets/assets/imgs/rick/4.jpg": "6d48900bf713ceb5a8ba75ae21620282",
"assets/assets/imgs/rick/5.jpg": "27959d6e9e35cae18c813530fd6df25e",
"assets/assets/imgs/rick/6.jpg": "9d4a1789150c03792c692b81f9f47fa6",
"assets/assets/imgs/rick/logo.png": "c63a6c854254c86199bbc9ba5e43b0ab",
"assets/assets/imgs/rick/rick.png": "a7e0fc5d4528dc599d0479526d8fb361",
"assets/assets/imgs/seller/1.jpg": "5a309810f658d234dabfe9bf60cfc1f3",
"assets/assets/imgs/seller/2.jpg": "d06e28a43580c92672482964ac6fe5c0",
"assets/assets/imgs/seller/3.jpg": "3d09151a17c8d76385187f83e667ae4b",
"assets/assets/imgs/seller/4.jpg": "f7eae61b3377ed376d609e195cf7d4f8",
"assets/assets/imgs/seller/5.jpg": "09af48bebe94518d28dee8532a53a76a",
"assets/assets/imgs/seller/6.jpg": "13fa66a2d3dbb0aca0cb6461cb6146cb",
"assets/assets/imgs/seller/logo.png": "a4f1c304f7763892602ddff1ae7ed6ab",
"assets/assets/imgs/seller/seller.png": "4e8db1b917f65c6f1fb4ca5b81c2283b",
"assets/assets/imgs/soon.png": "9a1e3f6279e92b82b694e517759a2a95",
"assets/assets/imgs/weather/1.jpg": "e5f305e686d556c8e65853562c782e02",
"assets/assets/imgs/weather/2.jpg": "93ce77c7ddadca8a95120f0e93d599f5",
"assets/assets/imgs/weather/3.jpg": "e5f305e686d556c8e65853562c782e02",
"assets/assets/imgs/weather/4.jpg": "4b9f9112b068430657de05c422334888",
"assets/assets/imgs/weather/5.jpg": "7258ad046bdd0ab4fe45b87d3abf3c3d",
"assets/assets/imgs/weather/6.jpg": "4b9f9112b068430657de05c422334888",
"assets/assets/imgs/weather/logo.png": "6ea14e96446ab0266a22590d9d66d2df",
"assets/assets/imgs/weather/weather.png": "dbf0f7ba86874f2e6d4ad567e04f4d42",
"assets/assets/lottie/bot.json": "342278e571ecc64b5a8aba55b1bb3347",
"assets/assets/lottie/downArrow.json": "09726de6181cd5532ce393cfd5f18f40",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/fonts/MaterialIcons-Regular.otf": "c8dde5aa413b0b02354c7aaba495cb8d",
"assets/NOTICES": "b09a233ac7f2aea09f65c14b28be05a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6ee7f7b9111fdfc06dc21b4fa85406f5",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"flutter_bootstrap.js": "c9b68054c4ef0aee1bc4e9e20ccd0023",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9021e18fe40eb5b81082256b1a4e5892",
"/": "9021e18fe40eb5b81082256b1a4e5892",
"main.dart.js": "047dbfb7d263564e62141bc78960e6cf",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
