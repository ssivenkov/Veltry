// change the color of the tool buttons on click
let CartBtnColor = document.querySelector(".cart-svg");
let cartBtn = document.querySelector(".cart-btn");
let CartBtnStickyColor = document.querySelector(".cart-sticky-svg");
let cartBtnSticky = document.querySelector(".cart-btn-sticky");
function ChangeCartBtnColorIn() {
   CartBtnColor.setAttribute("fill", "url(#linear-gradient)");
   cartBtn.style = "background-image: linear-gradient(0deg, #dddddd, #777777)";
}
function ChangeCartBtnColorOut() {
   CartBtnColor.removeAttribute("fill", "url(#linear-gradient)");
   cartBtn.style =
      "background-image: linear-gradient(180deg, #dddddd, #777777)";
}
function ChangeCartBtnStickyColorIn() {
   CartBtnStickyColor.setAttribute("fill", "url(#linear-gradient)");
   cartBtnSticky.style =
      "background-image: linear-gradient(0deg, #dddddd, #777777)";
}
function ChangeCartBtnStickyColorOut() {
   CartBtnStickyColor.removeAttribute("fill", "url(#linear-gradient)");
   cartBtnSticky.style =
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
cartBtnSticky.addEventListener("mouseover", ChangeCartBtnStickyColorIn);
cartBtnSticky.addEventListener("mouseout", ChangeCartBtnStickyColorOut);
searchBtn.addEventListener("mouseover", ChangeSearchBtnColorIn);
searchBtn.addEventListener("mouseout", ChangeSearchBtnColorOut);

// cart modal window
let cartWindow = document.querySelector(".popup-cart");
let closeBtnCartWindow = document.querySelector(".order-buttons__close");

// custom scroll (Simplebar.js)
document.body.classList.add("simplebar");
document.querySelectorAll(".simplebar").forEach(el => {
   new SimpleBar(el, { timeout: 500 });
});

let offScroll = function () {
   document.body.classList.add("native-cart-scroll-off");
   document.body.onmousedown = function (e) {
      if (e.button === 1) return false;
   }; // disable middle mouse button
   document.querySelectorAll(".simplebar-track")[(0, 1)].style =
      "opacity: 0; visibility: hidden;";
};
let onScroll = function () {
   document.body.classList.remove("native-cart-scroll-off");
   document.body.onmousedown = function (e) {
      if (e.button === 1) return true;
   }; // enable middle mouse button
   document.querySelectorAll(".simplebar-track")[(0, 1)].style =
      "opacity: 1; visibility: visible;";
};

function openCart() {
   cartWindow.classList.add("popup-cart-visible");
}
function closeCart() {
   cartWindow.classList.remove("popup-cart-visible");
}

cartBtn.addEventListener("click", openCart);
cartBtnSticky.addEventListener("click", openCart);
closeBtnCartWindow.addEventListener("click", closeCart);

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
   onScroll();
   let openedWindowEnlargedImage = document.querySelector(".enlarged-image");
   openedWindowEnlargedImage.remove();
};
let imgArray = document.querySelectorAll(".list-items__image");
imgArray.forEach(image => {
   image.addEventListener("click", openWindowEnlargedImage);
});

// initial cart value
localStorage.setItem("cartIsEmpty", true);

// create total cost component
let cartContainer = document.querySelector(".popup-cart__content");
let orderButtonsContainer = document.querySelector(".order-buttons");

let createTotalCostComponent = function () {
   let totalCostComponent = document.createElement("div");
   totalCostComponent.classList.add("total-cost");
   totalCostComponent.classList.add("total-cost-box");
   totalCostComponent.innerHTML = `
			<div class="total-cost__line"></div>
			<div class="total-cost__inner">
				<p class="total-cost__text">Total cost:</p>
				<p class="total-cost__cost">0$</p>
			</div>`;
   cartContainer.prepend(totalCostComponent);
};

// create confirm button component
let createConfirmButtonComponent = function () {
   let confirmButton = document.createElement("a");
   confirmButton.classList.add("order-buttons__confirm");
   confirmButton.innerHTML = "confirm";
   confirmButton.setAttribute("href", "order_page");
   orderButtonsContainer.append(confirmButton);
};

// create clear button component
let createClearButtonComponent = function () {
   let cartClearButton = document.createElement("div");
   cartClearButton.classList.add("order-buttons__clear");
   cartClearButton.classList.add("fas");
   cartClearButton.classList.add("fa-trash-alt");
   orderButtonsContainer.append(cartClearButton);
   cartClearButton.addEventListener("click", clearCart);
};

//	render total cost
let renderTotalCost = function () {
   let arrayOfCurrentCostOfItems = [];
   let currentCartItemsArray = document.querySelectorAll("li.cart-item");

   currentCartItemsArray.forEach(item => {
      let costOneItem = item.querySelector(".cart-item__cost").innerHTML;
      let resultCost = costOneItem * 1; // 1 is only needed to display the cost without unnecessary signs
      arrayOfCurrentCostOfItems.push(resultCost);
   });
   let totalCost = 0;
   let sumAllCost = function () {
      for (let index = 0; index < arrayOfCurrentCostOfItems.length; index++) {
         totalCost += arrayOfCurrentCostOfItems[index];
      }
   };
   sumAllCost();
   let totalCostTag = cartContainer.querySelector(".total-cost__cost");
   totalCostTag.innerHTML = `$${totalCost}.00`;
};

// add cart item to an empty cart
let renderCartItemInEmptyCart = function (id) {
   let keysFromLocalStorage = Object.keys(localStorage);
   let itemId = id;
   let keyItem;
   for (keyItem of keysFromLocalStorage) {
      /* let's say the keyItem is item camp2. Check happens for both the product
		category and its number. searchItemIndex becomes equal to 7, because
		it will stop in the correct category on the correct item */
      async function getItemData() {
         let response = await fetch("/all_images.php");
         let content = await response.json();

         let searchItemIndex;
         for (searchItemIndex in content) {
            let itemUrl = content[searchItemIndex].url;
            let itemWebp = content[searchItemIndex].webp;
            let itemCost = content[searchItemIndex].cost;
            let itemTitle = content[searchItemIndex].title;

            if (
               `${content[searchItemIndex].category}` ==
                  keyItem.replace(/\d/g, "") &&
               `${itemUrl.replace(/\D/g, "")}` == keyItem.replace(/\D/g, "")
            ) {
               let cartItem = document.createElement("li");
               cartItem.classList.add("cart-item");
               cartItem.classList.add(`${keyItem}`);
               cartItem.innerHTML = `
						<div class="cart-item__image-and-text">
						<picture>
							<source srcset="${itemWebp}"
							type="image/webp">
							<img class="list-items__image" src="${itemUrl}"
							alt="${itemTitle}">
						</picture>
							<p class="cart-item__description">${itemTitle}</p>
							<div class="cart-item__string-container">
								<p class="cart-item__cost">${itemCost}.00</p>
								<div class="amount amount-box">
									<a class="amount__btn-addition">&plus;</a>
									<p class="amount__number">1</p>
									<a class="amount__btn-subtract">&minus;</a>
								</div>
								<p class="cart-item__trash-icon"><i class="fas fa-trash-alt"></i></p>
							</div>
						</div>`;
               cartContainer.prepend(cartItem);
            }
         }
         renderTotalCost();
      }
      getItemData();
   }
};

// add cart item to a non-empty cart
let renderCartItemInNonEmptyCart = function (id) {
   let keysFromLocalStorage = Object.keys(localStorage);
   let itemId = id;
   let keyItem;
   for (keyItem of keysFromLocalStorage) {
      /* let's say the keyItem is item camp2. Check happens for both the product
		category and its number. searchItemIndex becomes equal to 7, because
		it will stop in the correct category on the correct item */
      async function getItemData() {
         let response = await fetch("/all_images.php");
         let content = await response.json();

         let searchItemIndex;
         for (searchItemIndex in content) {
            let itemUrl = content[searchItemIndex].url;
            let itemWebp = content[searchItemIndex].webp;
            let itemCost = content[searchItemIndex].cost;
            let itemTitle = content[searchItemIndex].title;

            if (
               itemId ==
               `${content[searchItemIndex].category}${itemUrl.replace(
                  /\D/g,
                  ""
               )}`
            ) {
               let cartItem = document.createElement("li");
               cartItem.classList.add("cart-item");
               cartItem.classList.add(`${id}`);
               cartItem.innerHTML = `
						<div class="cart-item__image-and-text">
						<picture>
							<source srcset="${itemWebp}"
							type="image/webp">
							<img class="list-items__image" src="${itemUrl}"
							alt="${itemTitle}">
						</picture>
							<p class="cart-item__description">${itemTitle}</p>
							<div class="cart-item__string-container">
								<p class="cart-item__cost">${itemCost}.00</p>
								<div class="amount amount-box">
									<a class="amount__btn-addition">&plus;</a>
									<p class="amount__number">1</p>
									<a class="amount__btn-subtract">&minus;</a>
								</div>
								<p class="cart-item__trash-icon"><i class="fas fa-trash-alt"></i></p>
							</div>
						</div>`;
               cartContainer.prepend(cartItem);
            }
         }
         renderTotalCost();
      }
      getItemData();
      return; // need to render one item
   }
};

// buy button on click
let buyBtnArray = document.querySelectorAll(".list-items__icon");
let buyButtonScript = function () {
   // tooltip render
   let tooltipRender = function () {
      this.classList.add("list-items__icon--active");
      setTimeout(() => {
         this.classList.remove("list-items__icon--active");
      }, 280);
   };
   let f2 = tooltipRender.bind(this);
   f2();

   // buy button tooltip animation on click
   offClickBuyBtn();
   offHoverBuyBtn();
   let buyBtnTooltip = document.createElement("div");
   let thisItemIdInLocalStorage = localStorage.getItem(this.closest("li").id);
   if (this.closest("li").id == thisItemIdInLocalStorage) {
      buyBtnTooltip.innerHTML = `<p class="tooltip">Has already!</p>`;
   } else {
      buyBtnTooltip.innerHTML = `<p class="tooltip">Added to cart!</p>`;
   }
   this.append(buyBtnTooltip);
   let tooltip = document.querySelector(".tooltip");
   setTimeout(() => {
      tooltip.classList.add("opacity1");
   }, 0);
   setTimeout(() => {
      tooltip.classList.remove("opacity1");
   }, 900);
   setTimeout(() => {
      buyBtnTooltip.remove();
   }, 1100);
   setTimeout(() => {
      onClickBuyBtn();
      onHoverBuyBtn();
   }, 1100);

   // add cart item in local storage and renderings
   let id;
   let getIdThisItem = () => {
      id = this.closest("li").id;
   };
   getIdThisItem();
   if (localStorage.getItem(id) != id) {
      localStorage.removeItem("cartIsEmpty");
      localStorage.setItem(id, id);
      let fillingCart = function () {
         let emptyCartText = document.querySelector(".popup-cart__empty");
         if ((emptyCartText != null) == true) {
            emptyCartText.remove();
            createTotalCostComponent();
            renderCartItemInEmptyCart();
            createConfirmButtonComponent();
            createClearButtonComponent();
         }
         if ((emptyCartText == null) == true) {
            renderCartItemInNonEmptyCart(id);
         }
      };
      fillingCart();
   }
};

buyBtnArray.forEach(buyBtn => {
   buyBtn.addEventListener("click", buyButtonScript);
});

// buy button tooltip functions for click
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

// search products (List.js)
let searchInput = document.querySelector("input.search-input");
let url = document.URL;
let searchItemWrapper = document.querySelector("div.search-item-wrapper");
if (
   // when the home page is open
   url == "http://localhost:3000/" ||
   url == "http://localhost:3000/index.html" ||
   url == "http://veltry.loc/" ||
   url == "http://veltry.loc/index" ||
   url == "http://veltry.loc/index.php" ||
   url == "http://veltry.loc/?" ||
   url == "http://veltry.loc/?.php" ||
   url == "http://veltry.site/" ||
   url == "http://veltry.site/index" ||
   url == "http://veltry.site/index.php" ||
   url == "http://veltry.site/?" ||
   url == "http://veltry.site/?.php" ||
   url == "https://veltry.site/" ||
   url == "https://veltry.site/index" ||
   url == "https://veltry.site/index.php" ||
   url == "https://veltry.site/?" ||
   url == "https://veltry.site/?.php"
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
      /* products from all iterations of the loop are sequentially
		changed for the search field and added to the container */
   });

   let scrollToSection = function (event) {
      let target = event.target.closest("li");
      if (!target) return;
      if (!searchItemWrapper.contains(target)) return;
      let sectionNumber;
      if (event.target.closest("li.bags")) {
         sectionNumber = 0;
      } else if (event.target.closest("li.camps")) {
         sectionNumber = 1;
      } else if (event.target.closest("li.cameras")) {
         sectionNumber = 2;
      } else if (event.target.closest("li.lenses")) {
         sectionNumber = 3;
      }
      searchInput.value = "";
      searchInput.blur();
      ChangeSearchBtnColorOut();
      let currentItemsList = document.querySelectorAll(".search-item");
      currentItemsList.forEach(item => {
         item.style = "display: none";
      });
      setTimeout(() => {
         sectionList[sectionNumber].scrollIntoView({
            behavior: "smooth",
         });
      }, 150); // setTimeout needed to almost complete fix scroll bug in mobile Chrome
   };
   searchItemWrapper.addEventListener("click", scrollToSection);

   let searchOptions = {
      valueNames: ["search-description"], // item sorting class
      listClass: ["search-item-wrapper"], // items container
      page: 4, // max count of displaying search position
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

   let searchInputClick = function () {
      ChangeSearchBtnColorIn();
   };
   searchInput.addEventListener("click", searchInputClick); // to save the color of the search icon

   let globalClickForSearchInput = function () {
      document.addEventListener("click", function (event) {
         if (event.target.closest("div.search-wrapper")) {
            showProductsInSearchInput(); // show product items if the input received focus
         } else {
            hideProductsInSearchInput(); // hide product items and make inactive search icon
            ChangeSearchBtnColorOut();
         }
      });
   };
   globalClickForSearchInput();

   let searchInputGetFocus = function () {
      searchInput.focus();
   };
   searchBtn.addEventListener("click", searchInputGetFocus); // for mobile and tablet
} else {
   // when any page other than the home page is open
   async function getResponse() {
      let response = await fetch("/all_images.php");
      let content = await response.json();

      // adding goods from the server to the container
      let searchItemIndex;
      for (searchItemIndex in content) {
         if (
            `${content[searchItemIndex].category}` == "bag" ||
            "camp" ||
            "camera" ||
            "lense"
         ) {
            let searchItem = document.createElement("li");
            searchItem.classList.add("search-item");
            searchItem.classList.add(`${content[searchItemIndex].category}s`);
            searchItem.innerHTML = `
					<img class="search-image" src="${content[searchItemIndex].url}">
					<p class="search-description">${content[searchItemIndex].title}</p>
				`;
            searchItemWrapper.append(searchItem);
         }
      }

      let scrollToSection = function (event) {
         let target = event.target.closest("li");
         if (!target) return;
         if (!searchItemWrapper.contains(target)) return;
         let sectionNumber;
         if (event.target.closest("li.bags")) {
            sectionNumber = 0;
            sessionStorage.setItem("scrollTosection", sectionNumber);
         } else if (event.target.closest("li.camps")) {
            sectionNumber = 1;
            sessionStorage.setItem("scrollTosection", sectionNumber);
         } else if (event.target.closest("li.cameras")) {
            sectionNumber = 2;
            sessionStorage.setItem("scrollTosection", sectionNumber);
         } else if (event.target.closest("li.lenses")) {
            sectionNumber = 3;
            sessionStorage.setItem("scrollTosection", sectionNumber);
         }
         searchInput.value = "";
         searchInput.blur();
         ChangeSearchBtnColorOut();
         let currentItemsList = document.querySelectorAll(".search-item");
         currentItemsList.forEach(item => {
            item.style = "display: none";
         });
         setTimeout(() => {
            window.location.href = "/";
         }, 150); // setTimeout needed to almost complete fix scroll bug in mobile Chrome
      };
      searchItemWrapper.addEventListener("click", scrollToSection);

      let searchOptions = {
         valueNames: ["search-description"], // item sorting class
         listClass: ["search-item-wrapper"], // items container
         page: 4, // max count of displaying search position
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

      let searchInputClick = function () {
         ChangeSearchBtnColorIn();
      };
      searchInput.addEventListener("click", searchInputClick); // to save the color of the search icon

      let globalClickForSearchInput = function () {
         document.addEventListener("click", function (event) {
            if (event.target.closest("div.search-wrapper")) {
               showProductsInSearchInput(); // show product items if the input received focus
            } else {
               hideProductsInSearchInput(); // hide product items and make inactive search icon
               ChangeSearchBtnColorOut();
            }
         });
      };
      globalClickForSearchInput();

      let searchInputGetFocus = function () {
         searchInput.focus();
      };
      searchBtn.addEventListener("click", searchInputGetFocus); // for mobile and tablet
   }
   getResponse();
}

// check for search after load page
let scrollToSectionFromLocalStorage = function () {
   let bagsSection = document.querySelector("#bags");
   let campsSection = document.querySelector("#camps");
   let camerasSection = document.querySelector("#cameras");
   let lensesSection = document.querySelector("#lenses");
   let sectionList = [bagsSection, campsSection, camerasSection, lensesSection];
   sectionList[
      Number(sessionStorage.getItem("scrollTosection"))
   ].scrollIntoView({
      behavior: "smooth",
   });
   sessionStorage.removeItem("scrollTosection");
};
if (typeof sessionStorage.getItem("scrollTosection") == "string") {
   window.onload = scrollToSectionFromLocalStorage;
}

// checking the cart for emptiness on page load
let checkingCartForEmptiness = function () {
   let keys = Object.keys(localStorage);
   if (keys.length > 1) {
      localStorage.removeItem("cartIsEmpty");
   }
};
checkingCartForEmptiness();

let setCartEmpty = function () {
   let emptyCart = document.createElement("div");
   emptyCart.classList.add("popup-cart__empty");
   emptyCart.innerHTML = "Now cart is empty";
   cartContainer.prepend(emptyCart);
};

let clearCart = function () {
   localStorage.clear();
   localStorage.setItem("cartIsEmpty", true);
   let allCartItems = document.querySelectorAll(".cart-item");
   allCartItems.forEach(item => {
      item.remove();
   });
   document.querySelector(".total-cost-box").remove();
   document.querySelector(".order-buttons__confirm").remove();
   document.querySelector(".order-buttons__clear").remove();
   setCartEmpty();
};

// check for cart items on page load
let keysLocalStorage = Object.keys(localStorage);
let valuesLocalStorage = Object.values(localStorage);
let checkCartItemsFromLocalStorage = function () {
   if (JSON.stringify(keysLocalStorage) == JSON.stringify(valuesLocalStorage)) {
      let keysArrayFromLocalStorage = Object.keys(localStorage);
      createTotalCostComponent();

      for (let key of keysArrayFromLocalStorage) {
         /* let's say the key is item camp2. Check happens for both the product
			category and its number. searchItemIndex becomes equal to 7, because
			it will stop in the correct category on the correct item */
         async function getItemsData() {
            let response = await fetch("/all_images.php");
            let content = await response.json();

            let searchItemIndex;
            for (searchItemIndex in content) {
               let itemUrl = content[searchItemIndex].url;
               let itemWebp = content[searchItemIndex].webp;
               let itemCost = content[searchItemIndex].cost;
               let itemTitle = content[searchItemIndex].title;
               if (
                  `${content[searchItemIndex].category}` ==
                     key.replace(/\d/g, "") &&
                  `${itemUrl.replace(/\D/g, "")}` == key.replace(/\D/g, "")
               ) {
                  let cartItem = document.createElement("li");
                  cartItem.classList.add("cart-item");
                  cartItem.classList.add(`${key}`);
                  cartItem.innerHTML = `
							<div class="cart-item__image-and-text">
							<picture>
								<source srcset="${itemWebp}"
								type="image/webp">
								<img class="list-items__image" src="${itemUrl}"
								alt="${itemTitle}">
							</picture>
								<p class="cart-item__description">${itemTitle}</p>
								<div class="cart-item__string-container">
									<p class="cart-item__cost">${itemCost}.00</p>
									<div class="amount amount-box">
										<a class="amount__btn-addition">&plus;</a>
										<p class="amount__number">1</p>
										<a class="amount__btn-subtract">&minus;</a>
									</div>
									<p class="cart-item__trash-icon"><i class="fas fa-trash-alt"></i></p>
								</div>
							</div>`;
                  cartContainer.prepend(cartItem);
               }
            }
            renderTotalCost();
         }
         getItemsData();
      }

      createConfirmButtonComponent();
      createClearButtonComponent();
   }
   if (localStorage.getItem("cartIsEmpty")) {
      setCartEmpty();
   }
};
checkCartItemsFromLocalStorage(); // search scrolling does not work when this function called through a method window.onliad

// cart item functions
cartContainer.onclick = function (event) {
   let renderAdditionCostItem = function (itemId) {
      let boxWithCost = event.target.closest(".cart-item__string-container");
      let costTag = boxWithCost.querySelector(".cart-item__cost");
      let boxWithButtons = event.target.closest(".amount-box");
      let textTag = boxWithButtons.querySelector(".amount__number");
      let count = textTag.innerHTML;
      let getCartItemCost = function () {
         let keysArrayFromLocalStorage = Object.keys(localStorage);
         for (let key of keysArrayFromLocalStorage) {
            /* let's say the key is item camp2 */
            async function getItemsData() {
               let response = await fetch("/all_images.php");
               let content = await response.json();

               let searchItemIndex;
               for (searchItemIndex in content) {
                  let itemUrl = content[searchItemIndex].url;
                  let itemCost = content[searchItemIndex].cost;
                  if (
                     `${content[searchItemIndex].category}${itemUrl.replace(
                        /\D/g,
                        ""
                     )}` == itemId
                  ) {
                     count++;
                     textTag.innerHTML = `${count}`;
                     let costOneItem = `${itemCost}`;
                     let newCost = costOneItem * count;
                     costTag.innerHTML = `${newCost}.00`;
                     renderTotalCost();
                  }
               }
            }
            getItemsData();
            return;
         }
      };
      getCartItemCost();
   };

   let renderSubtractCostItem = function (itemId) {
      let boxWithCost = event.target.closest(".cart-item__string-container");
      let costTag = boxWithCost.querySelector(".cart-item__cost");
      let boxWithButtons = event.target.closest(".amount-box");
      let textTag = boxWithButtons.querySelector(".amount__number");
      let count = textTag.innerHTML;
      let getCartItemCost = function () {
         let keysArrayFromLocalStorage = Object.keys(localStorage);
         for (let key of keysArrayFromLocalStorage) {
            /* let's say the key is item camp2 */
            async function getItemsData() {
               let response = await fetch("/all_images.php");
               let content = await response.json();

               let searchItemIndex;
               for (searchItemIndex in content) {
                  let itemUrl = content[searchItemIndex].url;
                  let itemCost = content[searchItemIndex].cost;
                  if (
                     `${content[searchItemIndex].category}${itemUrl.replace(
                        /\D/g,
                        ""
                     )}` == itemId
                  ) {
                     if (count <= 1) {
                        return;
                     } else {
                        let costOneItem = `${itemCost}`;
                        let oldCost = costOneItem * count;
                        newCost = oldCost - costOneItem;
                        costTag.innerHTML = `${newCost}.00`;
                        count--;
                        textTag.innerHTML = `${count}`;
                        renderTotalCost();
                     }
                  }
               }
            }
            getItemsData();
            return;
         }
      };
      getCartItemCost();
      return;
   };

   let currentCartItemsArray = document.querySelectorAll("li.cart-item");
   // delete
   if (event.target.closest("i")) {
      if (currentCartItemsArray.length == 1) {
         clearCart();
      } else {
         let stringOfClasses = event.target.closest("li").className;
         let itemId = stringOfClasses.replace(/cart-item /, "");
         localStorage.removeItem(itemId);
         event.target.closest("li").remove();
         renderTotalCost();
      }
   } else if (event.target.closest("a.amount__btn-addition")) {
      // addition
      let stringOfClasses = event.target.closest("li").className;
      let itemId = stringOfClasses.replace(/cart-item /, "");
      let boxWithButtons = event.target.closest(".amount-box");
      let textTag = boxWithButtons.querySelector(".amount__number");
      let count = textTag.innerHTML;
      if (count < 1) {
         return;
      } else {
         renderAdditionCostItem(itemId);
      }
   } else if (event.target.closest("a.amount__btn-subtract")) {
      // subtract
      let stringOfClasses = event.target.closest("li").className;
      let itemId = stringOfClasses.replace(/cart-item /, "");
      let boxWithButtons = event.target.closest(".amount-box");
      let textTag = boxWithButtons.querySelector(".amount__number");
      let count = textTag.innerHTML;
      if (count <= 1) {
         return;
      } else {
         renderSubtractCostItem(itemId);
      }
   }
};

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

// mouse patallax
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
// for of cycle - for mobile/tablet and desktop links section
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
