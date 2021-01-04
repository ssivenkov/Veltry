// if the browser can display webp then the webp class is added to the body tag
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// tools cnange color on click
const path1 = document.querySelector('.path1');
function ChangeOver1() {
	path1.setAttribute('fill', 'url(#linear-gradient)');
	document.getElementsByClassName('cart')[0].style="background-image: linear-gradient(0deg, #dddddd, #777777)";
};
function ChangeOut1() {
	path1.removeAttribute('fill', 'url(#linear-gradient)');
	document.getElementsByClassName('cart')[0].style="background-image: linear-gradient(180deg, #dddddd, #777777)";
};

const path2 = document.querySelector('.path2');
function ChangeOver2() {
	path2.setAttribute('fill', 'url(#linear-gradient)');
	document.getElementsByClassName('search-btn')[0].style="background-image: linear-gradient(0deg, #dddddd, #777777)";
};
function ChangeOut2() {
	path2.removeAttribute('fill', 'url(#linear-gradient)');
	document.getElementsByClassName('search-btn')[0].style="background-image: linear-gradient(180deg, #dddddd, #777777)";
};

// tools resize on tablet
function setup_for_width(size) {
	const cartsize = document.querySelector('.cartsize');
	const searchsize = document.querySelector('.searchsize');
	if (size.matches) {
		cartsize.setAttribute('width', '54');
		cartsize.setAttribute('height', '45');
		searchsize.setAttribute('width', '54');
		searchsize.setAttribute('height', '54');
		} else {
			cartsize.setAttribute('width', '36');
			cartsize.setAttribute('height', '30');
			searchsize.setAttribute('width', '36');
			searchsize.setAttribute('height', '36');
		};
};
let size = window.matchMedia( "(min-width: 768px)" );
size.addListener(setup_for_width);
setup_for_width(size);

// patallax
let bg1 = document.querySelector('.mouse-parallax-bg1');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg1.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});

let bg2 = document.querySelector('.mouse-parallax-bg2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

// smooth scroll
let headers = document.querySelectorAll('header a[href*="#"]');
for (header of headers) {
  if (header) {
	header.addEventListener('click', function(e){
      e.preventDefault();
      headerId = this.getAttribute('href');
      document.querySelector(headerId).scrollIntoView({
      	behavior: 'smooth', block: 'start'
      })
    })
  }
}

let bags = document.querySelectorAll('section a[href="#bags"]');
for (bag of bags) {
  if (bag) {
	bag.addEventListener('click', function(e){
      e.preventDefault();
      bagId = this.getAttribute('href');
      document.querySelector(bagId).scrollIntoView({
      	behavior: 'smooth', block: 'start'
      })
    })
  }
}

let camps = document.querySelectorAll('section a[href="#camps"]');
for (camp of camps) {
  if (camp) {
	camp.addEventListener('click', function(e){
      e.preventDefault();
      campId = this.getAttribute('href');
      document.querySelector(campId).scrollIntoView({
      	behavior: 'smooth', block: 'start'
      })
    })
  }
}

let lenses = document.querySelectorAll('section a[href="#lenses"]');
for (lense of lenses) {
  if (lense) {
	lense.addEventListener('click', function(e){
      e.preventDefault();
      lenseId = this.getAttribute('href');
      document.querySelector(lenseId).scrollIntoView({
      	behavior: 'smooth', block: 'start'
      })
    })
  }
}

let cameras = document.querySelectorAll('section a[href="#cameras"]');
for (camera of cameras) {
  if (camera) {
	camera.addEventListener('click', function(e){
      e.preventDefault();
      cameraId = this.getAttribute('href');
      document.querySelector(cameraId).scrollIntoView({
      	behavior: 'smooth', block: 'start'
      })
    })
  }
}