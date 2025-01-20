const BUTTON_ORDER = document.querySelector('.header__button');
const BUTTON_DOWNLOAD = document.querySelector('.program__button-download')
const BUTTON__PHOTO = document.querySelector('.program__button-photo')
const BUTTON_ORDER_ROUTE = document.querySelector('.choice__table-button')
const BURGER = document.querySelector('.burger')
const MENU = document.querySelector('.menu')
const CLOSE_MENU = document.querySelector('.menu__close')
const SELECT_BUTTON_CURRENCY = document.querySelector('.menu__select-currency')
const SELECT_BUTTON_LANGUAGE = document.querySelector('.menu__select-language')
const INFORMATION_BUTTONS = document.querySelectorAll('.information__button-item')
const INFORMATION_LIST = document.querySelectorAll('.information__list-content')

const buttonOrderClick = (button) => {
    button.addEventListener('mousedown', () => {
        button.style.opacity = '0.7';
    })

    button.addEventListener('mouseup', () => {
        button.style.opacity = '1';
    })
}

buttonOrderClick(BUTTON_ORDER)
buttonOrderClick(BUTTON_DOWNLOAD)
buttonOrderClick(BUTTON__PHOTO)
buttonOrderClick(BUTTON_ORDER_ROUTE)


const buttonMenuClick = (button) => {
    button.addEventListener('click', () => {
        MENU.classList.toggle('menu__show')

        return MENU.classList.contains('menu__show') ?
            document.body.style.overflow = 'hidden'
            :
            document.body.style.overflow = '';
    })
}

buttonMenuClick(BURGER)
buttonMenuClick(CLOSE_MENU)

const buttonSelectClick = (button, toggleClass, field) => {
    const ITEMS = document.querySelector(toggleClass)
    const SELECT_FIELD = document.querySelector(field)

    button.addEventListener('click', () => {
        document.querySelector(toggleClass).classList.toggle('menu__select-show')
    })

    ITEMS.addEventListener('click', (e) => {
        SELECT_FIELD.innerHTML = e.target.textContent
        return document.querySelector(toggleClass).classList.toggle('menu__select-show')
    })
}

buttonSelectClick(SELECT_BUTTON_CURRENCY, '.currency__list', '.field__currency')
buttonSelectClick(SELECT_BUTTON_LANGUAGE, '.language__list', '.field__language')


INFORMATION_BUTTONS.forEach((element, index) => {

    element.addEventListener('click', () => {
        if(element) {
            element.classList.toggle('information__list-button')
            INFORMATION_LIST[index].classList.toggle('information__show')
        }
    })
})

