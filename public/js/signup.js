// I need to post the data from the signup page to the db
// add event listener
// so that I can fetch call to post data
const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#inputUsername').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if (username && email && password) {
        const response = await fetch('/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/users/login');
        } else {
            alert('Failed to signup');
        };
    };
};
// create a pop up saying successfully signed up
// create error handlers for if a username is already taken
// create error handler if email is not formatted as an email
// create error handler for if a password does not meet minimum requirements
document
    .addEventListener('submit', signupHandler);
