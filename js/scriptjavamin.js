var close=document.querySelector(".staticbutton"),form=document.querySelector(".hotelselection"),datearrival=form.querySelector("[id=arrival]"),datedeparture=form.querySelector("[id=departure]"),adults=form.querySelector("[name=adults]"),children=form.querySelector("[name=children]");form.classList.add("form-close"),close.addEventListener("click",function(e){e.preventDefault(),form.classList.toggle("form-close"),datearrival.focus(),form.classList.remove("all-error")}),form.addEventListener("submit",function(e){datearrival.value&&departure.value&&adults.value&&children.value||(e.preventDefault(),form.classList.add("all-error"))});