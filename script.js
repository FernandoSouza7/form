const email = document.getElementsByClassName('form-control');
const pwd = document.getElementsByClassName('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (email.value === '' || email.value === null) {
        messages.push('Name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

console.log(form);