var button = document.querySelector('.staticbutton');
var modal = document.querySelector('.hotelselection');
button.addEventListener('click', function (evt) {
	evt.preventDefault;
	modal.classList.toggle('modal-show'); /* Класс modal-show нужно создать в css и сделать ему display: none; */
});
