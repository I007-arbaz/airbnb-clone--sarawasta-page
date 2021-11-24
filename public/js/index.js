let hamburger = document.querySelector('.hamburger')
let menuOption = document.querySelector('.menu-option')
/* let click = false
hamburger.addEventListener('click', () => {
    click = !click
    click ? menuOption.classList.add('show') && menuOption.classList.remove('hide') : menuOption.classList.add('hide') && menuOption.classList.remove('show')
}) */

hamburger.addEventListener('click', () => {
    if(menuOption.className == 'menu-option hide') {
        menuOption.classList.remove('hide')
        menuOption.classList.add('show')
    }else if(menuOption.className == 'menu-option show') {
        menuOption.classList.remove('show')
        menuOption.classList.add('hide')
    }
})

/* let heroImage = document.querySelector('.heroImage')
heroImage.onclick = () => {
    if(menuOption.className == 'menu-option show') {
        menuOption.classList.remove('show')
        menuOption.classList.add('hide')
    }
} */