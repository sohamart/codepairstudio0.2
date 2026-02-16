let navbar = document.querySelector('.nav2 .bar')
let mobilemenu = document.querySelector('.mobilemenu')
let menucontainer = document.querySelector('.mobilemenu .container')
let menucross = document.querySelector('.mobilemenu .cross')
let animate = document.querySelector('.animateddiv')

navbar.addEventListener('click', function () {
    mobilemenu.classList.toggle('active')
    menucontainer.classList.toggle('active')
    animate.classList.toggle('active')
    
})
menucross.addEventListener('click', function () {
    mobilemenu.classList.remove('active')
    menucontainer.classList.remove('active')
    animate.classList.remove('active')
    console.log("clicked")
    
})
let loginBtn = document.querySelector('.signup button');
let mobileLogin = document.querySelector('.menulogin');
let popup = document.querySelector('.login-popup');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close');

// Open from desktop navbar
loginBtn.addEventListener('click', () => {
    popup.classList.add('active');
    overlay.classList.add('active');
});

// Open from mobile menu
mobileLogin.addEventListener('click', () => {
    popup.classList.add('active');
    overlay.classList.add('active');
});

// Close button
closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});

// Click outside
overlay.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});
