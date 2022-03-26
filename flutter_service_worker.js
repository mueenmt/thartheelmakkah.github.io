'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c90ec3a2b862ccf6c1c4cb07543e86a5",
".git/config": "90fb90f156be988b418c6ebcb6ad641b",
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
".git/index": "573a0e505e62a02d34334325cb57c418",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c8feb0b9f397301cdcdb8e6d72fc5b8d",
".git/logs/refs/heads/master": "c8feb0b9f397301cdcdb8e6d72fc5b8d",
".git/logs/refs/remotes/gitweb/master": "3bfe5d8cac95a37f46298e6dac52fc27",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/03/5e663a74ebd8f631f3d96fc87790afe925bb84": "741b049403d9149f1c532bbefa5ed2dc",
".git/objects/04/dac91d81b27537ee419d45d56f6873682991a5": "a0d29188e8227e6203891419763c231d",
".git/objects/06/2f484cdad632d9df55c695f2ae1a1469a0d63b": "0d7155a81e475e61b613bf80272fc86f",
".git/objects/07/5fb30037e9a593e274543a3f0ea1c6f5015d01": "7c65b540147075bc32dc333adde4c879",
".git/objects/0a/09cf3373a209d93c4437d6c39f656fb1dc2631": "59dafe2c259871de7bc4b05e7796d199",
".git/objects/0b/22a9085b1b6dd48acf442fa0afbcd55f333726": "f8b4b11038ca4548df811533e7466a61",
".git/objects/0b/afc4ce3db4d6448f7dca7b06904ca4eeeb7de4": "71db44e314a97d4867adc72065469b05",
".git/objects/11/52d2ffabee44ffb16b3a67cb0c69649c4ffc8d": "762b80553ca2471ba923b47051bb9097",
".git/objects/12/6e82ac4ae08bb95321cf3bd3e17f6d418b951f": "29f44a42e9b238c0ca7f96401d58c56c",
".git/objects/15/2164c25bfcd0b3eef77f1e6f327965b19e4340": "f6d24f2cc44397bb43440280dc9f78f8",
".git/objects/1d/d0b066dd74b7f6c2df2ebe56addd217fb001ce": "30e53e381b85ceae7e4480bbc5a8ba51",
".git/objects/1f/4e0ed656ce058395f57ecbfedab838a29e027c": "e6c5b2b3dcef3d49da334f8e49eba5cb",
".git/objects/26/4e1f8395a20e85612570507510a9e8ba3e4dda": "b88e71efc2013a0ed11bd3eb68fa728e",
".git/objects/2c/1a12539f3dc9c74a5d9f30a623ca24c7d66f81": "7e0eafb3f392241f6259517ef8da620f",
".git/objects/2c/2c02c4a938d0090c104681bad3da82ec701fcd": "104c99a9c80974e1463d7b5a5cbab7ba",
".git/objects/2c/e010fe7e098c288fd6f4d5380e95b2707f6b35": "472184b1a4db77dc9ee30a62e8234583",
".git/objects/2d/404fa410135d265c925a655b162da661049aab": "6145ce8e560c6958cdef170956568c65",
".git/objects/30/49e943f117d258ef366a70770add676dbf8647": "450a6648774aa2f6d3482104d19873b1",
".git/objects/34/54055a8bbd660abaecd19acbf47bf441425f4a": "56773069e2339c02cf04428485f4d3a5",
".git/objects/34/f1e420738c09042600595eda19208dc3525353": "6c7b05b06be8813bacdeebfb119eaa3c",
".git/objects/35/7d2f52dd150e66d10bf949de4a1e7b70c5b1ed": "a3e7db1bf00de8a2b6af7c969e0c50e6",
".git/objects/39/cb7353b900a52d38e32f21b438bf75c77db6c6": "60ba8510e3316852d07403b910929f1f",
".git/objects/3a/68e40ca3534202bc4e5e2ee82743d49f14d85f": "7bbd80c985a8c860a64cb397f8f4fbec",
".git/objects/3b/fffeb3b98d3ebed67c68a552cdce4e3d80cfaa": "08ad13f2f09115d91d582745f4252b18",
".git/objects/3c/dae3b08526adba257a41ddddf2d6e677c74cf4": "d3b683660fc76c5c4451def630f68509",
".git/objects/3d/39a539e25a0e0a11ee155346447a886dc563a3": "876bd8a097dc92c98163f1e39ae7d51c",
".git/objects/47/a98b4c7ca4e973a54bd3ee33e71be5151706b6": "bd8728af048f3563af4e1e38b8f7eb70",
".git/objects/4a/0e67204f2e9490d1ebf58ce1d77fa1f194119e": "0389966841419024ee43b2f82a8c1c7b",
".git/objects/4b/48902792a2d051ceaaa523c100320989b72851": "4fe8f73b733e94315169a846e4d22089",
".git/objects/50/c2c69b2e959972da1be8d1e3ed6d9514aa5203": "0ae6a9686c83ef088261728cb9a005cb",
".git/objects/56/858d7027023fe39f1883145666ac90a0efaadd": "713f109bb60836e81b80cb78c095a0d6",
".git/objects/57/1246b9eb83e6999cf0175de23a2e0337ad1f84": "8cb40e1fd9fafd889142bba0a0b670c2",
".git/objects/5b/72195a9832fa00e93deef92b1e985599b05292": "6f5834a54b2be54cf1a01c37eb280338",
".git/objects/5c/7867e5e17b0ebc173d17b6470ce76a614d2b1b": "314a05059ca0fd606024a202ec2487dc",
".git/objects/5e/8e92ee63f438674dd8661b0faab09efb9d57e9": "027cef814789cc133044a15edbffb99f",
".git/objects/5f/7c315894c76ba1d3e1fa36f5e53d19eae3a081": "588820ee3c9a412caf8604e36e8834e8",
".git/objects/60/c7914f90ac6969dda6b8852b3d2dc287e1c040": "4aa64d2215b9fcae455b12815dc57858",
".git/objects/62/013461eddaf036252747ac15f97ae803476a99": "f477f75418d36527f62249e5354dcfff",
".git/objects/65/69fec734bbd61fe2782c1fc0fd1a3a7fac22ab": "ef6217be3491a2cdbede77e4c2dc6a0b",
".git/objects/66/4e335a93c1244dc2de9757c826d5de8f96475d": "79746983adbc30c56b2c0effc74cba4e",
".git/objects/6a/bbb727b8c1aea4fd4cbfc535e1c2eb46284a3f": "5f2dda73a6c7b6ceff06e977a1686403",
".git/objects/6c/2ae52c20bee814e26f17f5b992efa3cedaebb6": "d9bfdeead01e735d37588e5544fe2417",
".git/objects/6e/f91fb9fb42b463764fafbed78aa472c3cf7c66": "8c123cd79d1c1fcd5bc0aee7ff7a7146",
".git/objects/71/117fab46c26cbc9a6740e36f0b4c99582d1457": "a47b126eac0a2e459821577994bc4254",
".git/objects/72/af94c5872511b9c54e220c40f7d473697685f8": "795b2cf3b07e315860fb34031bb59860",
".git/objects/72/f6654e1f48206bf98746213514ae82cde38a06": "4c9a4b5ec47333eb54547429798a9ca3",
".git/objects/73/929b929b420ac21c2800928087ff3279320eb4": "bf1d6ec4ed64c5dc685548d954c50729",
".git/objects/78/014d9227e1c693c2e43318ca71d4cacfb30c93": "95f748ba789bb1942904cfe58e5a0bff",
".git/objects/7e/33d4658268b9242eae17541395e04efdfafa5a": "374d9c61e4405eb42eb4e3b51e8dcf9b",
".git/objects/7f/d7b693eed1b684a0696198a5366337bb6176aa": "60453059ac34dbd91197c53a4652e3c2",
".git/objects/81/6f0d7aa6b78bb72d92e3a585d74b4207a319bd": "812579a44389974d24c7f873eead356f",
".git/objects/85/77e0d26a99204cf7121866b57e50f60bea7e1b": "ac5c8b26be334d0faa00b6a3532d5cda",
".git/objects/85/b4d753371b40240bffd0804c2c45b6b6473670": "b1409aff9a6e2b3c15ad80361916f65e",
".git/objects/94/4ffbf4e09ab8a37734dde595e1327303e708d3": "4771341d872ae7678fd7239f1ff383ea",
".git/objects/97/002621eaa56008fcc2c2d67e0385cb3d47a8fc": "2a4b21c641537f5711cfb704b9281181",
".git/objects/a3/7f0e9da7bbef2acb3a2ad47ed28fde77619a16": "26a221c06d853085c83e545aacdcb768",
".git/objects/a7/256c81b13b5860e3661a9ae5c8f7d05e0d6de1": "bb995ce7edd4b2d268a54c53aa57eafd",
".git/objects/ab/dc3509f1cd69a075a91368fd77b1520be17793": "e3fa4bc00b8fb1b6b5d01d17e363ab13",
".git/objects/ac/ae58aeaa6e467f06bee801f683a600a7b05e18": "312a3f4dff5c8f7219a8b8606e50ddd6",
".git/objects/ae/a46c953e0597a795c76d513879d433e22920da": "675a01165dd63c1b2bb83a12bb91f372",
".git/objects/b0/a49124a49aaa21633eae4bc9d73a85c1aaca3b": "58e30b638d21c9fe78a1efd0bc519e0b",
".git/objects/b3/24a3a68a16f99ebbc40966e7ca32fd04e88b93": "ab35a9bd37f6fa7efb2b9822a71e82f6",
".git/objects/b5/888c23bcb98bf31839dcdf18cd7dd5318ca9fa": "d960d856525ba128e8da98256f5e4918",
".git/objects/ba/c6be8f65d8a75b51b428ab29a328c093d38407": "8e4d0a6222de98860902e8722adcc6b2",
".git/objects/be/c21bc16932b6d21d7191e788f6a7dcff4fc0f2": "d07bba52df3e1ac0c28299a6575e8d5e",
".git/objects/bf/ac8e9bf4526da1ae2eb6c2a1597db93c91f471": "31f5321068f4eb8fdbdce96ed288fe22",
".git/objects/c1/8130451ab5d77907151797ab037d2b29e89a40": "350307cf6ab297ca6e67d592046b9a0f",
".git/objects/c1/f7956decb4211ac42c1bdfae519775e3004408": "2d7879a41e41339670dd45848ff3d2a0",
".git/objects/c3/61173335e8d69a77e4cd6abb57660a0f6667ee": "2a20409b784a4a9831b42b8fc8aca6e4",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c6/1f0a11b972a6da2a2c18841f45dad62e0a5da7": "c33720af1c4e4cf2c917d3f44cc69468",
".git/objects/c6/2c70a7eb48947c4b9a5bc7abdf897271bc47f2": "029f8c700ea8181dc25907728b7272ac",
".git/objects/c7/4b529df0055af0b34c8309122890466e24001f": "fe47a7fb482d0b460c00a8eb02f57f2d",
".git/objects/c7/855e5357debb4516ec05ae854fc34fc763f0fe": "65c8eb8cbe168e901d843d3327564797",
".git/objects/c7/91201672a792196c1c0271fe7aeed2eb428809": "00a99714756f7b4a70c845fe2916c084",
".git/objects/c9/5c764c3be8c7fa1e222cbc67f91f28b0159c72": "25af7bdc95a94d42254b65f30506b73a",
".git/objects/ce/eac477a107a76516473d371bcb937cd629a87f": "c4bdd0120b0559bbca9b1f94b1aef77f",
".git/objects/cf/c11a28b60079d1c797d24bdb3bbd76892086d6": "cacbca391d80a804e0ea6c8877b5adf8",
".git/objects/d2/057ebf90e32f89b715f56ee2aa7d2379ce5010": "28c244e47337b79699154e4766475465",
".git/objects/d2/944c4451a2e9491425d4cd3872636ee9f2dd48": "fff3be3e3eaa695dbe49431b513357d6",
".git/objects/d6/320833ac33e2d72a71c69dfa2ccc57fb3bf143": "910fb5a3f9db629013f1cce25c07a350",
".git/objects/d8/d768b819f6cadc4b02e420607fc479b5f1cb85": "5c10d49a002ac337956edda885e1c084",
".git/objects/da/1cf398431a2e35b61f2dc3443dbcbad9f969aa": "f668024928742254b9ae86851969b27f",
".git/objects/db/5f9e66a391939d8355e0573e3e7b0dd4831973": "29de93ca3a3fe5a0a40d07658bbacec0",
".git/objects/de/b365768df6c70b0d78a5f1a7def3a0ce8010b2": "578b52b00e7f153f9d21bf3cc619e44f",
".git/objects/e0/1253be48a8f8eac130770b8125eb1e7e998990": "2a9f5f727096069bbbeb449f6ed3698a",
".git/objects/e0/b100a4afc45d86f3e70a23072889435b23c822": "85f440ee7ca33b585e01e8036780ee85",
".git/objects/e0/f6c3ba04ca6618833761a5ea5fc273e48f8b64": "c0186c189df6b9bd3a843ee480b2a338",
".git/objects/e1/38c0bd1ee3e86db2f2ff1939e0d5a555db94d0": "f19b7297fe3fff77c21e8463e86794d6",
".git/objects/e8/7f6fdc8c874d830ec8af16c5a30ca34c38b571": "37b8d5f2cd8fefa2e2e860d3837098c7",
".git/objects/e9/7a2ea36f232734ea77b93810c9d7fbd1998f91": "795e5379c116919517a61d1e4597b82f",
".git/objects/ec/fc347a8445fceb1b19c298fb5f855960a8fffd": "c41ac31ab6eb3f35470b1f23708b8d43",
".git/objects/f6/459b436454bd055701b5951f2531a90da07b35": "38bef533e3a2adfe86f200fea9e92621",
".git/objects/f9/23063fa75a85f15f563ad6daa6e5e4add691e9": "296cedd6244ea002f00157616fface83",
".git/objects/fa/4d5819f4abe52e9a0a75d1e475f3c2bbac7021": "7175076d6aeabc5e937f653b5a2e3400",
".git/objects/fd/12a5536b866096be7b91b72c996b30563855f4": "dfa4cca3edadd289fd85e8ecddeb1816",
".git/objects/ff/47df3960d3d344c6d1c17b47676aa4d0efbf37": "64bdca5db89f069323b5157e90e2b87e",
".git/refs/heads/master": "32ae4c43baadcf3a263d42f0a86f742b",
".git/refs/remotes/gitweb/master": "32ae4c43baadcf3a263d42f0a86f742b",
"assets/AssetManifest.json": "e11fa1d881ac2ce759eba455ab08c16e",
"assets/assets/fonts/MySocialIcons.ttf": "345787fe6cbe5bf827f3a84436278f6f",
"assets/assets/fonts/Ubuntu-Bold.ttf": "e00e2a77dd88a8fe75573a5d993af76a",
"assets/assets/fonts/Ubuntu-Medium.ttf": "8e22c2a6e3a3c679787e763a97fa11f7",
"assets/assets/fonts/Ubuntu-Regular.ttf": "2505bfbd9bde14a7829cc8c242a0d25c",
"assets/assets/images/knowtech_logo.jpg": "e4f14e0b7510a2bc3dd86960fb2b250d",
"assets/assets/images/man.png": "6459a78b8d655079c08d4249cbcc0db5",
"assets/assets/images/quran-competition.png": "d66d77c8aafc7a7983472da1d46416b9",
"assets/assets/images/quran_image.png": "8e644670d99e87a5ec29c407c5568066",
"assets/assets/images/quran_image1.png": "88bba718656b596072528883f4410c27",
"assets/assets/images/rsc_logo.png": "1f7438023867c6a627e3b9ccb795689f",
"assets/assets/images/thartheel_logo.png": "4a9c7e5c6c29c78f4560c0ea7851a51d",
"assets/assets/images/zzzme.png": "bc71075c2873e782a72523d790c34531",
"assets/assets/images/zzzzshot_home.png": "142acbd2ab909b8efcb114631689e2f0",
"assets/FontManifest.json": "927f2f13a2d04e1dbe1ab15efbdb72fa",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "8fcc75934580bfcb3001c62cc3e4ba29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c233fec64b26509f9918d336d1fe7020",
"/": "c233fec64b26509f9918d336d1fe7020",
"main.dart.js": "d7c876bd00245bb811983d936fbfb98c",
"manifest.json": "180108de7296da58a7e7f34ee0132f3c",
"version.json": "2e5718ddc601847d341ce2c7a7f54a49"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
