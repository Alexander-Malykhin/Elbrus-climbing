const BUTTON_ORDER = document.querySelector('.header__button');
const BUTTON_DOWNLOAD = document.querySelector('.program__button-download')
const BUTTON__PHOTO = document.querySelector('.program__button-photo')
const BUTTON_ORDER_ROUTE = document.querySelector('.choice__table-button')
const BURGER = document.querySelector('.burger')
const MENU = document.querySelector('.menu')
const CLOSE_MENU = document.querySelector('.menu__close')
const SELECT_BUTTON_CURRENCY = document.querySelector('.menu__select-currency')
const SELECT_BUTTON_LANGUAGE = document.querySelector('.menu__select-language')
const INFORMATION_ITEMS = document.querySelectorAll('.information__list-item')
const INFORMATION_BUTTONS = document.querySelectorAll('.information__button-item')
const INFORMATION_CONTENT = document.querySelectorAll('.information__list-content')
const SCHEDULE_BUTTONS = document.querySelectorAll('.schedule__button-item')
const SCHEDULE_ITEMS = document.querySelectorAll('.schedule__list-item')
const SCHEDULE_CONTENT = document.querySelectorAll('.schedule__list-text')
const SCHEDULE_BUTTON = document.querySelector('.schedule__button-list')

const videoBackground = () => {
    const VIDEO = document.querySelector('#video')
    const BUTTON_VIDEO = document.querySelector('.header__information-button')
    const img = document.querySelector('#btn')

    BUTTON_VIDEO.addEventListener('click', () => {
        if (VIDEO.paused) {
            img.src = './images/pause.png'
            VIDEO.play()
        } else {
            img.src = './images/triangle.png'
            VIDEO.pause()
        }
    })
}

videoBackground()

const videoSlider = () => {
    const VIDEO_LIST = document.querySelectorAll('.header__slider-video');
    const BUTTON_VIDEO_LIST = document.querySelectorAll('.header__slider-button');

    VIDEO_LIST.forEach((videoElement, index) => {
        const buttonElement = BUTTON_VIDEO_LIST[index];

        videoElement.addEventListener('click', () => {
            if (videoElement.paused) {
                buttonElement.style.display = 'none';
                videoElement.play();
            } else {
                buttonElement.style.display = 'block';
                videoElement.pause();
            }
        });

        buttonElement.addEventListener('click', (e) => {
            e.stopPropagation();
            if (videoElement.paused) {
                buttonElement.style.display = 'none';
                videoElement.play();
            } else {
                buttonElement.style.display = 'block';
                videoElement.pause();
            }
        });
    });
};

videoSlider();


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
    const BACKGROUND_MENU = document.querySelector('.menu__background')

    if (BACKGROUND_MENU) {
        BACKGROUND_MENU.addEventListener('click', () => {
            MENU.classList.remove('menu__show')
            return document.body.style.overflow = '';
        })
    }

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


INFORMATION_ITEMS.forEach((element, index) => {

    element.addEventListener('click', () => {
        if (element) {
            INFORMATION_BUTTONS[index].classList.toggle('information__list-button')
            INFORMATION_CONTENT[index].classList.toggle('information__show')
        }
    })
})

SCHEDULE_ITEMS.forEach((element, index) => {

    element.addEventListener('click', () => {
        if (element) {
            SCHEDULE_BUTTONS[index].classList.toggle('information__list-button')
            SCHEDULE_CONTENT[index].classList.toggle('information__show')
        }
    })
})

SCHEDULE_BUTTON.addEventListener('click', () => {
    const BUTTON_CONTENT = SCHEDULE_BUTTON.innerText

    switch (BUTTON_CONTENT) {
        case 'Раскрыть все дни' :
            SCHEDULE_BUTTON.innerText = 'Закрыть все дни'

            SCHEDULE_ITEMS.forEach((element, index) => {
                SCHEDULE_BUTTONS[index].classList.add('information__list-button')
                SCHEDULE_CONTENT[index].classList.add('information__show')
            })
            break;
        case 'Закрыть все дни' :
            SCHEDULE_BUTTON.innerText = 'Раскрыть все дни'

            SCHEDULE_ITEMS.forEach((element, index) => {
                SCHEDULE_BUTTONS[index].classList.remove('information__list-button')
                SCHEDULE_CONTENT[index].classList.remove('information__show')
            })
            break;
    }
})
