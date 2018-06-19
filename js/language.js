var language = document.getElementById('language');

function toggleLanguage() {
	language.classList.toggle('active');
}

language.onclick = toggleLanguage;