// change the color of the tool buttons on click
let CartBtnColor = document.querySelector(".cart-svg");
let cartBtn = document.querySelector(".cart-btn");
function ChangeCartBtnColorIn() {
   CartBtnColor.setAttribute("fill", "url(#linear-gradient)");
   cartBtn.style = "background-image: linear-gradient(0deg, #dddddd, #777777)";
}
function ChangeCartBtnColorOut() {
   CartBtnColor.removeAttribute("fill", "url(#linear-gradient)");
   cartBtn.style =
      "background-image: linear-gradient(180deg, #dddddd, #777777)";
}

let SearchBtnColor = document.querySelector(".search-svg");
let searchBtn = document.querySelector(".search-btn");
function ChangeSearchBtnColorIn() {
   SearchBtnColor.setAttribute("fill", "url(#linear-gradient)");
   searchBtn.style =
      "background-image: linear-gradient(0deg, #dddddd, #777777)";
}
function ChangeSearchBtnColorOut() {
   SearchBtnColor.removeAttribute("fill", "url(#linear-gradient)");
   searchBtn.style =
      "background-image: linear-gradient(180deg, #dddddd, #777777)";
}

// change the color of the tool buttons on hover cursor
cartBtn.addEventListener("mouseover", ChangeCartBtnColorIn);
cartBtn.addEventListener("mouseout", ChangeCartBtnColorOut);
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
   let openedWindowEnlargedImage = document.querySelector(".enlarged-image");
   openedWindowEnlargedImage.addEventListener(
      "click",
      closeWindowEnlargedImage
   );
};
let closeWindowEnlargedImage = function () {
   let openedWindowEnlargedImage = document.querySelector(".enlarged-image");
   openedWindowEnlargedImage.remove();
   onScroll();
};
let imgArray = document.querySelectorAll(".list-items__image");
imgArray.forEach(image => {
   image.addEventListener("click", openWindowEnlargedImage);
});

// buy button click animation
let buyBtnArray = document.querySelectorAll(".list-items__icon");
let buyBtnChangeColor = function () {
   this.classList.add("list-items__icon--active");
   setTimeout(() => {
      this.classList.remove("list-items__icon--active");
   }, 280);
};
buyBtnArray.forEach(buyBtn => {
   buyBtn.addEventListener("click", buyBtnChangeColor);
});

// buy button tooltip click
function clickHandler(e) {
   e.stopPropagation();
   e.preventDefault();
}
let offClickBuyBtn = function () {
   buyBtnArray.forEach(buyBtn => {
      buyBtn.addEventListener("click", clickHandler, true);
   });
};
let onClickBuyBtn = function () {
   buyBtnArray.forEach(buyBtn => {
      buyBtn.removeEventListener("click", clickHandler, true);
   });
};
let offHoverBuyBtn = function () {
   buyBtnArray.forEach(buyBtn => {
      buyBtn.classList.add("buyBtnCursorDefault");
   });
};
let onHoverBuyBtn = function () {
   buyBtnArray.forEach(buyBtn => {
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
buyBtnArray.forEach(buyBtn => {
   buyBtn.addEventListener("click", buyBtnTooltipShowAndHide);
});

// custom scroll (Simplebar.js)
body.classList.add("simplebar");
document.querySelectorAll(".simplebar").forEach(el => {
   new SimpleBar(el, { timeout: 500 });
});

// search products (List.js)
let searchInput = document.querySelector("form.search-form input.search-input");
let url = document.URL;
console.log(url);
let searchItemWrapper = document.querySelector("div.search-item-wrapper");

if (
   // if open home page
   url == "http://localhost:3000/" ||
   url == "http://localhost:3000/index.html" ||
   url == "http://veltry.loc/" ||
   url == "http://veltry.loc/index" ||
   url == "http://veltry.loc/index.php" ||
   url == "http://veltry.site/" ||
   url == "http://veltry.site/index" ||
   url == "http://veltry.site/index.php" ||
   url == "http://veltry.site/" ||
   url == "http://veltry.site/index" ||
   url == "http://veltry.site/index.php" ||
   url == "https://veltry.site/" ||
   url == "https://veltry.site/index" ||
   url == "https://veltry.site/index.php"
) {
   let bagsSection = document.querySelector("#bags");
   let campsSection = document.querySelector("#camps");
   let camerasSection = document.querySelector("#cameras");
   let lensesSection = document.querySelector("#lenses");
   let sectionList = [bagsSection, campsSection, camerasSection, lensesSection];
   sectionList.forEach(section => {
      let sectionType = section.id;
      let itemList = section.querySelectorAll("li");
      itemList.forEach(item => {
         let cloneItem = item.cloneNode(true);
         cloneItem.querySelector("div.list-items__cost-box").remove();
         cloneItem.classList.remove("list-items__item");
         cloneItem.classList.add("search-item");
         cloneItem
            .querySelector("img.list-items__image")
            .classList.add("search-image");
         cloneItem
            .querySelector("img.list-items__image")
            .classList.remove("list-items__image");
         cloneItem
            .querySelector("p.list-items__description")
            .classList.add("search-description");
         cloneItem
            .querySelector("p.list-items__description")
            .classList.remove("list-items__description");
         cloneItem.classList.add(sectionType);
         searchItemWrapper.append(cloneItem);
      });
      /* products from all cycles are sequentially changed for the search
		field and added to the container */
   });
   let scrollToSection = function (event) {
      let target = event.target.closest("li");
      if (!target) return;
      if (!searchItemWrapper.contains(target)) return;
      let sectionType;
      if (event.target.closest("li.bags")) {
         sectionType = 0;
      } else if (event.target.closest("li.camps")) {
         sectionType = 1;
      } else if (event.target.closest("li.cameras")) {
         sectionType = 2;
      } else if (event.target.closest("li.lenses")) {
         sectionType = 3;
      }
      searchInput.value = "";
      let currentItemsList = document.querySelectorAll(".search-item");
      currentItemsList.forEach(item => {
         item.style = "display: none";
      });
      sectionList[sectionType].scrollIntoView({
         behavior: "smooth",
      });
   };
   searchItemWrapper.addEventListener("click", scrollToSection);
} else {
   /* если текущий url не совападает с url главной страницы, то пусть
	js попросит ajax'ом у сервера картинки товаров, сервер через php вернет ему
	картинки товаров, js через промис запишет их в local storage, и после этого
	каждый раз картинки будут загружаться оттуда, если проверка покажет
	что картинки есть в local storage */
   console.log("текущий url отличается от url главной страницы");

   /*
   const requestURL = "https://jsonplaceholder.typicode.com/users";
   // http://veltry.loc/all_images.php
   const xhr = new XMLHttpRequest();
   xhr.open("GET", requestURL);
   xhr.responseType = "json";
   xhr.onload = () => {
      console.log(xhr.response);
   };
   xhr.send();
	*/
}

let searchOptions = {
   valueNames: ["search-description"], // item sorting class
   listClass: ["search-item-wrapper"], // items container
   page: 5, // max count of displaying search position
};

let searchItemsList = new List("searchitemslist", searchOptions);
searchItemsList.sort("search-description");

let inputFilter = function () {
   searchInput.addEventListener("keyup", function () {
      let inputValue = searchInput.value;
      if (inputValue.length >= 1) {
         let currentItemsList = document.querySelectorAll(".search-item");
         currentItemsList.forEach(item => {
            item.style = "display: grid";
         });
      } else {
         let currentItemsList = document.querySelectorAll(".search-item");
         currentItemsList.forEach(item => {
            item.style = "display: none";
         });
      }
   });
};
inputFilter(); // show items if input is not empty, hide items if input is empty

let hideProductsInSearchInput = function () {
   let currentItemsList = document.querySelectorAll(".search-item");
   currentItemsList.forEach(item => {
      item.style = "display: none";
   });
};

let showProductsInSearchInput = function () {
   searchInput.addEventListener("focus", function () {
      let inputValue = searchInput.value;
      if (inputValue.length >= 1) {
         let currentItemsList = document.querySelectorAll(".search-item");
         currentItemsList.forEach(item => {
            item.style = "display: grid";
         });
      }
   });
};

let globalClickForSearchInput = function () {
   document.addEventListener("click", function (event) {
      if (event.target.closest("div.search-wrapper")) {
         showProductsInSearchInput(); // show product items if the input received focus
      } else {
         hideProductsInSearchInput(); // hide product items if the input has lost focus
      }
   });
};
globalClickForSearchInput();

let searchInputGetFocus = function () {
   searchInput.focus();
};
searchBtn.addEventListener("click", searchInputGetFocus); // for mobile and tablet

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
let headers = document.querySelectorAll('a[href*="#"]');
for (header of headers) {
   if (header) {
      header.addEventListener("click", function (e) {
         e.preventDefault();
         headerId = this.getAttribute("href");
         document.querySelector(headerId).scrollIntoView({
            behavior: "smooth",
         });
      });
   }
}

let bags = document.querySelectorAll('a[href="#bags"]');
for (bag of bags) {
   if (bag) {
      bag.addEventListener("click", function (e) {
         e.preventDefault();
         bagId = this.getAttribute("href");
         document.querySelector(bagId).scrollIntoView({
            behavior: "smooth",
         });
      });
   }
}

let camps = document.querySelectorAll('a[href="#camps"]');
for (camp of camps) {
   if (camp) {
      camp.addEventListener("click", function (e) {
         e.preventDefault();
         campId = this.getAttribute("href");
         document.querySelector(campId).scrollIntoView({
            behavior: "smooth",
         });
      });
   }
}

let lenses = document.querySelectorAll('a[href="#lenses"]');
for (lense of lenses) {
   if (lense) {
      lense.addEventListener("click", function (e) {
         e.preventDefault();
         lenseId = this.getAttribute("href");
         document.querySelector(lenseId).scrollIntoView({
            behavior: "smooth",
         });
      });
   }
}

let cameras = document.querySelectorAll('a[href="#cameras"]');
for (camera of cameras) {
   if (camera) {
      camera.addEventListener("click", function (e) {
         e.preventDefault();
         cameraId = this.getAttribute("href");
         document.querySelector(cameraId).scrollIntoView({
            behavior: "smooth",
         });
      });
   }
}

// printed title (TypeIt.js)
new TypeIt("#typeit", {
   speed: 50,
   cursor: false,
}).go();

// sorting buttons (List.js)
let optionsBags = {
   valueNames: ["cost-bag"], // item sorting class
   listClass: ["bags-list"], // items container
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

let BagsList = new List("sorting-bags-container", optionsBags); // class of shared container
let CampsList = new List("sorting-camps-container", optionsCamps);
let CamerasList = new List("sorting-cameras-container", optionsCameras);
let LensesList = new List("sorting-lenses-container", optionsLenses);
