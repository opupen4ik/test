var login = document.getElementById('login');
var whitepaper = document.getElementById('whitepaper');
var logIn = document.getElementById('log-in');

function activatePopup() {
	var thisPopup = document.getElementById('popup-' + this.id);
	thisPopup.classList.add('active');
	body.classList.add('no-scroll');
	thisPopup.getElementsByClassName('popup__close')[0].onclick = closePopup;
}
function closePopup() {
	this.parentNode.classList.remove('active');
	if (!(document.getElementById('menu').classList.contains('active'))) {
		body.classList.remove('no-scroll');
	}
}

login.onclick = activatePopup;
whitepaper.onclick = activatePopup;
logIn.onclick = activatePopup;