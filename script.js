const path1 = document.querySelector('.path1');
function ChangeOver1() {
	path1.setAttribute('fill', 'url(#linear-gradient)');
};
function ChangeOut1() {
	path1.removeAttribute('fill', 'url(#linear-gradient)');
};

const path2 = document.querySelector('.path2');
function ChangeOver2() {
	path2.setAttribute('fill', 'url(#linear-gradient)');
};
function ChangeOut2() {
	path2.removeAttribute('fill', 'url(#linear-gradient)');
};
