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