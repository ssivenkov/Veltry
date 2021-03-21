// if the browser can display webp then the webp class is added to the body tag
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
   if (support == true) {
      document.querySelector("body").classList.add("webp");
   } else {
      document.querySelector("body").classList.add("no-webp");
   }
});

// change the color of the tool buttons on click
const path1 = document.querySelector(".path1");
function ChangeOver1() {
   path1.setAttribute("fill", "url(#linear-gradient)");
   document.getElementsByClassName("cart")[0].style =
      "background-image: linear-gradient(0deg, #dddddd, #777777)";
}
function ChangeOut1() {
   path1.removeAttribute("fill", "url(#linear-gradient)");
   document.getElementsByClassName("cart")[0].style =
      "background-image: linear-gradient(180deg, #dddddd, #777777)";
}

const path2 = document.querySelector(".path2");
function ChangeOver2() {
   path2.setAttribute("fill", "url(#linear-gradient)");
   document.getElementsByClassName("search-btn")[0].style =
      "background-image: linear-gradient(0deg, #dddddd, #777777)";
}
function ChangeOut2() {
   path2.removeAttribute("fill", "url(#linear-gradient)");
   document.getElementsByClassName("search-btn")[0].style =
      "background-image: linear-gradient(180deg, #dddddd, #777777)";
}

// change the color of the sort buttons on click
const BagsСheap = document.querySelector(".sort-bags__cheap");
const BagsExpensive = document.querySelector(".sort-bags__expensive");
function BagsСheapActive() {
   BagsExpensive.classList.remove("sort-bags__expensive--active");
   BagsExpensive.classList.add("sort-bags__expensive--deactive");
   BagsСheap.classList.remove("sort-bags__cheap--deactive");
   BagsСheap.classList.add("sort-bags__cheap--active");
}

function BagsExpensiveActive() {
   BagsСheap.classList.remove("sort-bags__cheap--active");
   BagsСheap.classList.add("sort-bags__cheap--deactive");
   BagsExpensive.classList.remove("sort-bags__expensive--deactive");
   BagsExpensive.classList.add("sort-bags__expensive--active");
}

const CampsСheap = document.querySelector(".sort-camps__cheap");
const CampsExpensive = document.querySelector(".sort-camps__expensive");
function CampsСheapActive() {
   CampsExpensive.classList.remove("sort-camps__expensive--active");
   CampsExpensive.classList.add("sort-camps__expensive--deactive");
   CampsСheap.classList.remove("sort-camps__cheap--deactive");
   CampsСheap.classList.add("sort-camps__cheap--active");
}
function CampsExpensiveActive() {
   CampsСheap.classList.remove("sort-camps__cheap--active");
   CampsСheap.classList.add("sort-camps__cheap--deactive");
   CampsExpensive.classList.remove("sort-camps__expensive--deactive");
   CampsExpensive.classList.add("sort-camps__expensive--active");
}

const CamerasСheap = document.querySelector(".sort-cameras__cheap");
const CamerasExpensive = document.querySelector(".sort-cameras__expensive");
function CamerasСheapActive() {
   CamerasExpensive.classList.remove("sort-cameras__expensive--active");
   CamerasExpensive.classList.add("sort-cameras__expensive--deactive");
   CamerasСheap.classList.remove("sort-cameras__cheap--deactive");
   CamerasСheap.classList.add("sort-cameras__cheap--active");
}
function CamerasExpensiveActive() {
   CamerasСheap.classList.remove("sort-cameras__cheap--active");
   CamerasСheap.classList.add("sort-cameras__cheap--deactive");
   CamerasExpensive.classList.remove("sort-cameras__expensive--deactive");
   CamerasExpensive.classList.add("sort-cameras__expensive--active");
}

const LensesСheap = document.querySelector(".sort-lenses__cheap");
const LensesExpensive = document.querySelector(".sort-lenses__expensive");
function LensesСheapActive() {
   LensesExpensive.classList.remove("sort-lenses__expensive--active");
   LensesExpensive.classList.add("sort-lenses__expensive--deactive");
   LensesСheap.classList.remove("sort-lenses__cheap--deactive");
   LensesСheap.classList.add("sort-lenses__cheap--active");
}
function LensesExpensiveActive() {
   LensesСheap.classList.remove("sort-lenses__cheap--active");
   LensesСheap.classList.add("sort-lenses__cheap--deactive");
   LensesExpensive.classList.remove("sort-lenses__expensive--deactive");
   LensesExpensive.classList.add("sort-lenses__expensive--active");
}

// tools resize on tablet
function setup_for_width(size) {
   const cartsize = document.querySelector(".cartsize");
   const searchsize = document.querySelector(".searchsize");
   if (size.matches) {
      cartsize.setAttribute("width", "54");
      cartsize.setAttribute("height", "45");
      searchsize.setAttribute("width", "54");
      searchsize.setAttribute("height", "54");
   } else {
      cartsize.setAttribute("width", "36");
      cartsize.setAttribute("height", "30");
      searchsize.setAttribute("width", "36");
      searchsize.setAttribute("height", "36");
   }
}
let size = window.matchMedia("(min-width: 768px)");
size.addListener(setup_for_width);
setup_for_width(size);

// patallax
let bg1 = document.querySelector(".mouse-parallax-bg1");
window.addEventListener("mousemove", function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   bg1.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
});

let bg2 = document.querySelector(".mouse-parallax-bg2");
window.addEventListener("mousemove", function (e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;
   bg2.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
});

// smooth scroll
let headers = document.querySelectorAll('header a[href*="#"]');
for (header of headers) {
   if (header) {
      header.addEventListener("click", function (e) {
         e.preventDefault();
         headerId = this.getAttribute("href");
         document.querySelector(headerId).scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      });
   }
}

let bags = document.querySelectorAll('section a[href="#bags"]');
for (bag of bags) {
   if (bag) {
      bag.addEventListener("click", function (e) {
         e.preventDefault();
         bagId = this.getAttribute("href");
         document.querySelector(bagId).scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      });
   }
}

let camps = document.querySelectorAll('section a[href="#camps"]');
for (camp of camps) {
   if (camp) {
      camp.addEventListener("click", function (e) {
         e.preventDefault();
         campId = this.getAttribute("href");
         document.querySelector(campId).scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      });
   }
}

let lenses = document.querySelectorAll('section a[href="#lenses"]');
for (lense of lenses) {
   if (lense) {
      lense.addEventListener("click", function (e) {
         e.preventDefault();
         lenseId = this.getAttribute("href");
         document.querySelector(lenseId).scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      });
   }
}

let cameras = document.querySelectorAll('section a[href="#cameras"]');
for (camera of cameras) {
   if (camera) {
      camera.addEventListener("click", function (e) {
         e.preventDefault();
         cameraId = this.getAttribute("href");
         document.querySelector(cameraId).scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      });
   }
}

// TypeIt.js
new TypeIt("#foratrip", {
   strings: "for a trip",
   speed: 50,
   cursor: false,
}).go();

// List.js
let optionsBags = {
   valueNames: ["cost-bag"], // item class
   listClass: ["bags-list"], // item container
};
let optionsCamps = {
   valueNames: ["cost-camp"],
   listClass: ["camps-list"],
};
let optionsCameras = {
   valueNames: ["cost-camera"],
   listClass: ["cameras-list"],
};
let optionsLenses = {
   valueNames: ["cost-lense"],
   listClass: ["lenses-list"],
};

let BagsList = new List("sorting-bags-container", optionsBags); // generic container
let CampsList = new List("sorting-camps-container", optionsCamps);
let CamerasList = new List("sorting-cameras-container", optionsCameras);
let LensesList = new List("sorting-lenses-container", optionsLenses);
