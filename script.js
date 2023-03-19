const form = document.getElementsByClassName('form');

form.addEventListener('submit', (event) => {
event.preventDefault();

// Validation checks
const name = form['name'].value.trim();
const email = form['email'].value.trim();
const password = form['password'].value.trim();
const confirmPassword = form['confirm-password'].value.trim();


if (!name || name.length < 3) {
	alert('Please enter a valid name');
	return;
}

if (!email || !email.includes('@') || !email.includes('.')) {
	alert('Please enter a valid email address');
	return;
}

if (!password || password.length < 6) {
	alert('Please enter a valid password (at least 6 characters)');
	return;
}

if (password !== confirmPassword) {
	alert('Passwords do not match');
	return;
}



// Form submission
alert('Form submitted successfully!');
form.reset() ;
})