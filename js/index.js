import { burgerMenu, ScrollTopFunc, addPriceMenu, addPriceMenuFull, createDate } from "./functions.js"

//Бургер меню
const $burgerMenu = document.querySelector('.burger__menu')
$burgerMenu.addEventListener('click', burgerMenu)

//Весь скролл
ScrollTopFunc()

//Кнопки прайс
const $PriceLi = document.querySelectorAll('.price__li')
const $PriceAsideLI = document.querySelectorAll('.price__aside_li')
$PriceLi.forEach(btn => {
    btn.addEventListener('click', addPriceMenu)
})
$PriceAsideLI.forEach(btn => {
    btn.addEventListener('click', addPriceMenuFull)
})

//обработка дакты
createDate(document.querySelector('.price__menu_p'))

const $headerNavLi = document.querySelectorAll('.header__nav_li')
const $burgerNavLi = document.querySelectorAll('.burger__nav_li')

$headerNavLi.forEach(element => {
        element.addEventListener('click', clickScrollComments)   
});

$burgerNavLi.forEach(element => {
    element.addEventListener('click', clickScrollComment1)  
   
});
const $wrapper = document.querySelector('.wrapper')
console.log($wrapper.children);
let p = ['Прайс',  'Отзывы','Оплата', 'Доставка', 'Резка']

function clickScrollComments() {
    
    let px = [
        $wrapper.children[1].offsetTop ,
        $wrapper.children[9].offsetTop ,
        $wrapper.children[6].offsetTop ,
        $wrapper.children[5].offsetTop , 
        $wrapper.children[5].offsetTop  ]
    let a
    for (let i = 0; i < 5; i++) {
        if (this.textContent == p[i]) a = px[i]
    }
    if (this.textContent == p)
        console.log(this);
    scrollTo({
        top: `${a}`,
        left: 0,
        behavior: 'smooth'
    })
}
function clickScrollComment1() {
    
    let px = [
        $wrapper.children[3].offsetTop - 80,
        $wrapper.children[7].offsetTop - 80,
        $wrapper.children[6].offsetTop - 80,
        $wrapper.children[5].offsetTop - 80, 
        $wrapper.children[5].offsetTop + 250]
    let a
    for (let i = 0; i < 5; i++) {
        if (this.nextElementSibling.textContent == p[i]) a = px[i]
    }
    if (this.nextElementSibling.textContent == p)
        console.log(this);
    scrollTo({
        top: `${a}`,
        left: 0,
        behavior: 'smooth'
    })
}






