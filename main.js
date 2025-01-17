const BUTTON_ORDER = document.querySelector('.header__button');
const BUTTON_DOWNLOAD = document.querySelector('.program__button-download')

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