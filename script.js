// tools
	//cnange color 
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