const BUTTON_ORDER = document.querySelector('.header__button');
const BUTTON_DOWNLOAD = document.querySelector('.program__button-download')
const BUTTON__PHOTO = document.querySelector('.program__button-photo')
const BUTTON_ORDER_ROUTE = document.querySelector('.choice__table-button')
const BURGER = document.querySelector('.burger')
const MENU = document.querySelector('.menu')
const CLOSE_MENU = document.querySelector('.menu__close')

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