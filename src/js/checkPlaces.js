/* let farms = document.getElementById('farms')
let amazingPool = document.getElementById('amazingPool')
let placesList = document.querySelectorAll('ul li')
placesList.forEach(each => {
    each.addEventListener('click', e => {
        if(e.target.dataset.set == farms.id) {
        farms.classList.add('active')
        amazingPool.classList.remove('active')
    }else if(e.target.dataset.set == amazingPool.id) {
        amazingPool.classList.add('active')
        farms.classList.remove('active')
    }
    })
}) */

let placesList = document.querySelectorAll('ul li')
let cardDeck = document.querySelectorAll('.card-deck')
    
console.log(placesList)
placesList.forEach(each => {
    each.addEventListener('click', () => {
        cardDeck.forEach(card => {
            card.classList.remove('active')
        })
        cardDeck.forEach(card => {
            if(each.dataset.set == card.id) {
                card.classList.add('active')
            }
        })
    })
})

let data = document.querySelector('.link .card-img img')

data.addEventListener('click', e => {
    console.log(e.target.src)
    let image = e.target.src
})
