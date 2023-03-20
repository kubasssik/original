import { descriptions } from "./description.js";

//Бургер меню
const $burgerBtnblocks = document.querySelector('.burger__btn_blocks ')


export function burgerMenu() {
    this.children[0].classList.toggle('__active')
    this.children[0].children[0].classList.toggle('new')
    $burgerBtnblocks.classList.toggle('burger__btn__acteve')
}

//Весь скролл
const $headerDownBlocks = document.querySelector('.header__down_blocks')

export function ScrollTopFunc() {
    function trackScroll() {
        const scrolled = window.pageYOffset;

        if (scrolled > 50) {
            $headerDownBlocks.style.position = 'fixed'

        }
        if (scrolled < 50) {
            $headerDownBlocks.style.position = 'relative'

        }

        if (scrolled > 500) {
            goTopBtn.style.display = 'block';
        }
        //показывает блок
        if (scrolled < 500) {
            goTopBtn.style.display = 'none';
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 10);
        }
    }
    const goTopBtn = document.querySelector('.back_to_top');
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

}

//Кнопки прайс
const $PriceMenu = document.querySelectorAll('.price__menu')
const $PriceAsideLI = document.querySelectorAll('.price__aside_li')
const $PriceLi = document.querySelectorAll('.price__li')
//перевернуть телефон

window.addEventListener('resize', ()=>{
    console.log(window.innerWidth);
    if(window.innerWidth > 576 || window.innerWidth == 319){ //319px iphone SE
        $PriceLi.forEach(btn => {
            if (btn.classList[2] == 'btn__red') {
                $PriceAsideLI.forEach(nBtn => {
                    nBtn.classList.remove('btn__red')
                    if (nBtn.textContent == btn.textContent) {
                        nBtn.classList.add('btn__red')
                    }
                });
            }
        })   
    }
    else{
        $PriceAsideLI.forEach(btn => {
            if (btn.classList[2] == 'btn__red') {
                $PriceLi.forEach(nBtn => {
                    nBtn.classList.remove('btn__red')
                    if (nBtn.textContent == btn.textContent) {
                        nBtn.classList.add('btn__red')
                    }
                });
            }
        })   
    }
})



export function addPriceMenu() {
    $PriceLi.forEach(btn => {
        btn.classList.remove('btn__red')
        btn.nextElementSibling.classList.remove('display__block')
    })
    for (let i = 0; i < descriptions.length; i++) {
        if (this.textContent === descriptions[i][0]) {
            this.nextElementSibling.classList.toggle('display__block')
            this.classList.toggle('btn__red')
        }
    }
}

export function addPriceMenuFull() {
    $PriceAsideLI.forEach(btn => {
        btn.classList.remove('btn__red')
    })
    $PriceMenu.forEach(winMenu => {
        winMenu.classList.remove('display__block')
    })
    for (let i = 0; i < descriptions.length; i++) {
        if (this.textContent == descriptions[i][0]) {
            $PriceMenu[i].classList.toggle('display__block')
            this.classList.toggle('btn__red')
        }
    }
}
//обработка дакты
export function createDate(params) {
    let date = new Date()
    let d = date.getDate()
    let m = date.getMonth()
    let y = date.getFullYear()
    if (d <= 9) {
        d = `0${date.getDate()}`
    }
    if (m <= 8) {
        m = `0${date.getMonth()}`
    }
    params.textContent = `Цены без доставки с учетом НДС, действительны с ${d}.${m}.${y}г.`
}

const $messIcon = document.querySelectorAll('.mess__style')
$messIcon.forEach(e => e.addEventListener('click',headerMess ))
function headerMess() {
    
       if(this.classList[0] == 'telephone__burger') location.href = 'tel: +79787077886'
        if(this.classList[0] == 'whatsapp') location.href = 'https://wa.me/79787077886'
        if(this.classList[0] == 'viber') location.href = 'https://viber.click/79787077886'
        if(this.classList[0] == 'telegram') location.href = 'https://tlgg.ru/@Viktormetall'
        
}
//Валидация отзыва
const $formsAddBtn = document.querySelector('.forms__add_btn')
let flag1 = false
let flag2 = false
export function validationNameComment() {
    if (this.value.length <= 2) {
        this.nextElementSibling.textContent = 'Имя должно содержать, не меньше 3-х символов'

    }
    if (this.value.length >= 17) {
        this.nextElementSibling.textContent = 'Имя должно содержать, не больше 16-х символов'

    }
    if (this.value.length > 3) {
        if (this.value.match(/\d/)) {//ddd -проверить 3 дд
            this.nextElementSibling.textContent = 'Нужны буквы'
        }

    }
    if (this.value.length == 0 || this.value.length > 2 && this.value.length < 17 && this.value.match(/\D/)) {
        this.nextElementSibling.textContent = ''
    }
    if (this.nextElementSibling.textContent == '') {
        this.previousElementSibling.style.color = 'green'
        flag1 = true
    }
    if (this.nextElementSibling.textContent != '' || this.value.length == 0) {
        this.previousElementSibling.style.color = 'red'
        flag1 = false

    }

    if (flag1 && flag2 == true) {
        $formsAddBtn.removeAttribute('disabled')
        $formsAddBtn.style.opacity = '1'
    }
    else {
        $formsAddBtn.setAttribute('disabled', 'disabled')
        $formsAddBtn.style.opacity = '.5'
    }
}


export function validationComment() {
    if (this.value.length < 50) {
        this.nextElementSibling.textContent = `Не меньше 50 символов, сейчас ${this.value.length}`
        this.nextElementSibling.style.color = 'red'
        this.previousElementSibling.style.color = 'red'
        flag2 = false
    }
    if (this.value.length >= 50) {
        this.nextElementSibling.textContent = `Не больше 300 символов, сейчас  ${this.value.length}`
        this.nextElementSibling.style.color = 'green'
        this.previousElementSibling.style.color = 'green'
        flag2 = true
    }
    if (this.value.length > 300) {
        this.nextElementSibling.textContent = `Не больше 300 символов, сейчас  ${this.value.length}`
        this.nextElementSibling.style.color = 'red'
        this.previousElementSibling.style.color = 'red'
        flag2 = false
    }


    if (flag1 && flag2 == true) {
        $formsAddBtn.removeAttribute('disabled')
        $formsAddBtn.style.opacity = '1'
    }
    else {
        $formsAddBtn.setAttribute('disabled', 'disabled')
        $formsAddBtn.style.opacity = '.5'
    }
}
//Валидация отзыва
const $inputAddComment = document.querySelector('.input__add_comment')
const $formsAddTextarea = document.querySelector('.forms__add_textarea')
$inputAddComment.addEventListener('input', validationNameComment)
$formsAddTextarea.addEventListener('input', validationComment)


const $commentActiveBtn = document.querySelectorAll('.__active_add')
const $windowCommentBody = document.querySelector('.window__comment_body')
const $commentAddClosed = document.querySelector('.comment__add_closed')

//Кнопка добавить комментарий
$commentActiveBtn.forEach(btn => {
    btn.addEventListener('click', commentsWindow)
})
//Кнопка закрыть окно комментарий
$commentAddClosed.addEventListener('click', closedCommentsWindow)


function closedCommentsWindow() {
    $windowCommentBody.style.display = 'none'
}

function commentsWindow() {
    if (this.textContent == 'Добавить отзыв') {
        $windowCommentBody.style.display = 'block'
    }
}

//еффект телефонной трубки 
const $telphon = document.querySelector('.telephone__burger>span')
phoneVibra($telphon)

export function phoneVibra(telphon) {
    telphon.classList.toggle('vibra__frame_1')
    setTimeout(() => {
        telphon.classList.toggle('vibra__frame_1')
        telphon.classList.toggle('vibra__frame_2')
    }, 100)
    setTimeout(() => {
        telphon.classList.toggle('vibra__frame_2')
    }, 1000)
    setTimeout(() => {
        phoneVibra(telphon)
    }, 2000)
}

