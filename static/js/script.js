//alert('JS load')

function checkForm(form){
	let checkResult = true;
	form.querySelectorAll("input, textarea, select").forEach(elem => {
		if (elem.getAttribute("data-req")) {
			if(elem.value == "") {
				checkResult = false;
				elem.classList.add("error");
			} else
				elem.classList.remove("error");
		}
	});

	return checkResult;
}

document.querySelectorAll("form").forEach(form => {
	form.addEventListener('submit', e => {
		e.preventDefault();

		if(checkForm(form)) {
			let formData = new FormData(form);
			console.log(formData);	
		} else {
			console.log("форма не отправлена");
		}
	});

});