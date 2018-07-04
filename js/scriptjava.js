var close = document.querySelector(".staticbutton");
var form =  document.querySelector(".hotelselection");

var datearrival = form.querySelector("[id=arrival]");
var datedeparture = form.querySelector("[id=departure]");

var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]")



close.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-close");
});

close.addEventListener("click", function (evt) {
  datearrival.focus();
});

form.addEventListener("submit", function (evt) {
  if (!datearrival.value||!departure.value) {
    evt.preventDefault();
    console.log("введите желаемую дату");
  }
});

form.addEventListener("submit", function (evt) {
  if (!adults.value||!children.value) {
    evt.preventDefault();
    console.log("введите количество");
  }
});
