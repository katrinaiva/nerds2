var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var password = popup.querySelector("[name=mail]");
link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	login.focus();
});
close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});
form.addEventListener("submit", function (event) {
	if (!name.value || !mail.value) {
		event.preventDefault();
	}
});
window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		popup.classList.remove("modal-content-show");
	}
});

