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

// tools cnange color
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
	document.getElementsByClassName('search')[0].style="background-image: linear-gradient(0deg, #dddddd, #777777)";
};
function ChangeOut2() {
	path2.removeAttribute('fill', 'url(#linear-gradient)');
	document.getElementsByClassName('search')[0].style="background-image: linear-gradient(180deg, #dddddd, #777777)";
};

// cnange size
function setup_for_width(size) {
	const cartsize = document.querySelector('.cartsize');
	const searchsize = document.querySelector('.searchsize');
	if (size.matches) {
		cartsize.setAttribute('width', '72');
		cartsize.setAttribute('height', '60');
		searchsize.setAttribute('width', '72');
		searchsize.setAttribute('height', '72');
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
let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}