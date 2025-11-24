const pathesToCache = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./css/animations.css",
  "./js/main.js",
  "./js/animations.js",
  "./js/projects.js",
  "./assets/img/banner-bg.png",
  "./assets/img//color-sharp2.png",
  "./assets/img/footer-bg.png",
  "./assets/img/header-img.svg",
  "./assets/img/nav-icon1.svg",
  "./assets/img/nav-icon2.svg",
  "./assets/img/nav-icon3.svg",
  "./assets/img/project-img1.png",
  "./assets/img/project-img2.png",
  "./assets/img/project-img3.png",
  "./assets/img/project-img4.png",
  "./assets/img/project-img5.png",
  "./assets/img/project-img6.png",
  "./assets/img/project-img7.png",
  "./assets/img/project-img8.png",
  "./assets/img/project-img9.png",
  "./assets/img/project-img10.png",
  "./assets/img/project-img11.png",
  "./assets/img/project-img12.png",
  "./assets/img/project-img13.png",
  "./assets/img/project-img14.jpg",
  "./assets/img/project-img15.jpg",
  "./assets/img/project-img16.jpg",
  "./assets/img/project-img17.jpg",
];

self.addEventListener("install", (event) => {
  console.log("Service Worker installed.");
  self.skipWaiting();
  event.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(pathesToCache);
    })
  );
});

addEventListener("activate", () => {
  console.log("Service Worker activated.");
});

addEventListener("fetch", (event) => {
  console.log("Fetch event for ", event.request.url);
  event.respondWith(
    caches
      .match(event.request.url)
      .then((response) => response || fetch(event.request.url))
    // caches.match(event.request.url).then((response) => {
    //   if (response) {
    //     console.log("Found ", event.request.url, " in cache");
    //     return response;
    //   }
    //   console.log("Network request for ", event.request.url);
    //   return fetch(event.request.url);
    // })
  );
});
