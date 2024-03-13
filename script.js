// DOM elements
let menu = document.querySelector('.menu-cards');
let category = document.querySelector('.sandwiches');
let main = document.querySelector('.main');
let btnLogin = document.querySelector('#btn-login');
let btnLogout = document.getElementById('btnLogout');
let section1 = document.querySelector('.section1');
let welcomeUser = document.getElementById('welcomeUser');

// Sign Up elements
let userName = document.getElementById('userName');
let mobSignup = document.getElementById('mobSignup');
let passwordSignup = document.getElementById('passwordSignup');
let signUp = document.getElementById('signUp');

// Login elements
let mobLogin = document.getElementById('mobLogin');
let passwordLogin = document.getElementById('passwordLogin');
let login = document.getElementById('login');

// Display menu on click and hide on double click
category.addEventListener('click', function() {
    menu.style.display = "flex";
});
category.addEventListener('contextmenu', function() {
    event.preventDefault(); 
    menu.style.display = "none";
});

// Display main content on login button click
btnLogin.addEventListener('click', function() {
    main.style.display = "block";
});
// Hide main content on section click
section1.addEventListener('click', function() {
    main.style.display = "none";
});

// Initialize users array from localStorage or empty array
let users = JSON.parse(localStorage.getItem('users')) || [];

// Sign Up functionality
signUp.addEventListener('click', function() {
    // Check if mobile number already exists
    let existingUser = users.find(user => user.mobile === mobSignup.value);
    if (existingUser) {
        alert('Mobile already exists. Please use a different Mobile Number.');
        return;
    }
    let userData = {
        name: userName.value,
        mobile: mobSignup.value,
        password: passwordSignup.value,
    };
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
});

// Login functionality
login.addEventListener('click', function() {
    let user = users.find(user => user.mobile === mobLogin.value && user.password === passwordLogin.value);
    if (user) {
        alert("Welcome, " + user.name);
        welcomeUser.innerHTML =user.name;
        btnLogin.style.display=('none')
        btnLogout.style.display=('flex')

    } else {
        alert('Sorry, invalid Mobile Number or password!');
    }
});
