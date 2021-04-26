// change the color of the tool buttons on click
let CartBtnColor = document.querySelector(".cart-svg");
function ChangeCartBtnColorIn() {
   CartBtnColor.setAttribute("fill", "url(#linear-gradient)");
   document.querySelector(".cart-btn").style =
      "background-image: linear-gradient(0deg, #dddddd, #777777)";
}
function ChangeCartBtnColorOut() {
   CartBtnColor.removeAttribute("fill", "url(#linear-gradient)");
   document.querySelector(".cart-btn").style =
      "background-image: linear-gradient(180deg, #dddddd, #777777)";
}

let SearchBtnColor = document.querySelector(".search-svg");
function ChangeSearchBtnColorIn() {
   SearchBtnColor.setAttribute("fill", "url(#linear-gradient)");
   document.querySelector(".search-btn").style =
      "background-image: linear-gradient(0deg, #dddddd, #777777)";
}
function ChangeSearchBtnColorOut() {
   SearchBtnColor.removeAttribute("fill", "url(#linear-gradient)");
   document.querySelector(".search-btn").style =
      "background-image: linear-gradient(180deg, #dddddd, #777777)";
}

// change the color of the tool buttons on hover cursor
let cartBtn = document.querySelector(".cart-btn");
cartBtn.addEventListener("mouseover", ChangeCartBtnColorIn);
cartBtn.addEventListener("mouseout", ChangeCartBtnColorOut);

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("mouseover", ChangeSearchBtnColorIn);
searchBtn.addEventListener("mouseout", ChangeSearchBtnColorOut);

// cart modal window
let cartWindow = document.querySelector(".popup-cart");
let closeBtn = document.querySelector(".order-buttons__close");
let body = document.querySelector("body");

let offScroll = function () {
   body.classList.add("native-cart-scroll-off");
   document.body.onmousedown = function (e) {
      if (e.button === 1) return false;
   }; // disable middle mouse button
   document.querySelectorAll(".simplebar-track")[(0, 1)].style =
      "opacity: 0; visibility: hidden;";
};
let onScroll = function () {
   body.classList.remove("native-cart-scroll-off");
   document.body.onmousedown = function (e) {
      if (e.button === 1) return true;
   }; // enable middle mouse button
   document.querySelectorAll(".simplebar-track")[(0, 1)].style =
      "opacity: 1; visibility: visible;";
};

function openCart() {
   offScroll();
   cartWindow.classList.add("popup-cart-visible");
}
function closeCart() {
   onScroll();
   cartWindow.classList.remove("popup-cart-visible");
}

cartBtn.addEventListener("click", openCart);
closeBtn.addEventListener("click", closeCart);

// product image enlargement
let openWindowEnlargedImage = function () {
   offScroll();
   let imgPath = this.getAttribute("src");
   let windowEnlargedImage = document.createElement("div");
   windowEnlargedImage.innerHTML = `
	<div class="enlarged-image">
		<div class="enlarged-image__area">
			<div class="enlarged-image__align-container">
				<div class="enlarged-image__image-container">
					<img class="enlarged-image__image" src="${imgPath}">
					<i class="enlarged-image__close-btn fas fa-times"></i>
				</div>
			</div>
		</div>
	</div>`;
   document.body.append(windowEnlargedImage);
   let closeBtnsWindowEnlargedImage = document.querySelectorAll(
      ".enlarged-image__area, .enlarged-image__image, .enlarged-image__close-btn"
   );
   closeBtnsWindowEnlargedImage.forEach((closeBtn) => {
      closeBtn.addEventListener("click", closeWindowEnlargedImage);
   });
};
let closeWindowEnlargedImage = function () {
   let openedWindowEnlargedImage = document.querySelector(".enlarged-image");
   openedWindowEnlargedImage.remove();
   onScroll();
};
let imgArray = document.querySelectorAll(".list-items__image");
imgArray.forEach((image) => {
   image.addEventListener("click", openWindowEnlargedImage);
});

// buy button click animation
let buyBtnArray = document.querySelectorAll(".list-items__icon");
let buyBtnChangeColor = function () {
   this.classList.add("list-items__icon--active");
   setTimeout(() => {
      this.classList.remove("list-items__icon--active");
   }, 200);
};
buyBtnArray.forEach((buyBtn) => {
   buyBtn.addEventListener("click", buyBtnChangeColor);
});

// buy button tooltip click
function clickHandler(e) {
   e.stopPropagation();
   e.preventDefault();
}
let offClickBuyBtn = function () {
   buyBtnArray.forEach((buyBtn) => {
      buyBtn.addEventListener("click", clickHandler, true);
   });
};
let onClickBuyBtn = function () {
   buyBtnArray.forEach((buyBtn) => {
      buyBtn.removeEventListener("click", clickHandler, true);
   });
};
let offHoverBuyBtn = function () {
   buyBtnArray.forEach((buyBtn) => {
      buyBtn.classList.add("buyBtnCursorDefault");
   });
};
let onHoverBuyBtn = function () {
   buyBtnArray.forEach((buyBtn) => {
      buyBtn.classList.remove("buyBtnCursorDefault");
   });
};

// buy button tooltip window
let buyBtnTooltip = document.createElement("div");
buyBtnTooltip.innerHTML = `<p class="tooltip">Added to cart!</p>`;
let buyBtnTooltipShowAndHide = function () {
   offClickBuyBtn();
   offHoverBuyBtn();
   this.append(buyBtnTooltip);
   let tooltip = document.querySelector(".tooltip");
   setTimeout(() => {
      tooltip.classList.add("opacity1");
   }, 0);
   setTimeout(() => {
      tooltip.classList.remove("opacity1");
   }, 1500);
   setTimeout(() => {
      buyBtnTooltip.remove();
   }, 1700);
   setTimeout(() => {
      onClickBuyBtn();
      onHoverBuyBtn();
   }, 1700);
};
buyBtnArray.forEach((buyBtn) => {
   buyBtn.addEventListener("click", buyBtnTooltipShowAndHide);
});

// custom scroll (Simplebar.js)
body.classList.add("simplebar");
document.querySelectorAll(".simplebar").forEach((el) => {
   new SimpleBar(el, { timeout: 500 });
});

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

// printed title (TypeIt.js)
new TypeIt("#typeit", {
   speed: 50,
   cursor: false,
}).go();

// sorting (List.js)
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
