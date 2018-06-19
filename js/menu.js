var btn = document.getElementById('close');
var menu = document.getElementById('menu');
var body = document.getElementsByTagName('body')[0];

function toggleClose() {
	btn.classList.toggle('active');
}
function toggleNav() {
	menu.classList.toggle('active');
}
function noScroll() {
	body.classList.toggle('no-scroll');
}
function toggleMenu() {
	toggleNav();
	toggleClose();
	noScroll();
}

btn.onclick = toggleMenu;