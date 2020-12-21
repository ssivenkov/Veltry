// tools
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

