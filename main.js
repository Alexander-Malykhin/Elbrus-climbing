const BUTTON_ORDER = document.querySelector('.header__button');


const buttonOrderClick = (button) => {
    button.addEventListener('mousedown', () => {
        button.style.opacity = '0.7';
    })

    button.addEventListener('mouseup', () => {
        button.style.opacity = '1';
    })
}

buttonOrderClick(BUTTON_ORDER)