function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);