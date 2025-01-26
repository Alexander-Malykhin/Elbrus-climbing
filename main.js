//BUTTONS ANIMATIONS
const BUTTON_ORDER = document.querySelector('.header__button');
const BUTTON__PHOTO = document.querySelector('.program__conditions-button')
const BUTTON_ORDER_ROUTE = document.querySelector('.choice__table-button')
//BUTTONS MENU
const BURGER = document.querySelector('.burger')
const CLOSE_MENU = document.querySelector('.menu__close')
//BUTTON SELECT
const SELECT_BUTTON_CURRENCY = document.querySelector('.menu__select-currency')
const SELECT_BUTTON_LANGUAGE = document.querySelector('.menu__select-language')
//BUTTONS ANIMATIONS
const buttonOrderClick = (button) => {
    button.addEventListener('mousedown', () => {
        button.style.opacity = '0.7';
    })

    button.addEventListener('mouseup', () => {
        button.style.opacity = '1';
    })
}
buttonOrderClick(BUTTON_ORDER)
buttonOrderClick(BUTTON__PHOTO)
buttonOrderClick(BUTTON_ORDER_ROUTE)
//VIDEO-BACKGROUND
const videoBackground = () => {
    const VIDEO = document.querySelector('#video')
    const BUTTON_VIDEO = document.querySelector('.header__banner-button')
    const BUTTON_SHOW = document.querySelector('#button_video')

    BUTTON_VIDEO.addEventListener('click', () => {
        if (VIDEO.paused) {
            BUTTON_SHOW.src = './images/pause.png'
            VIDEO.play()
        } else {
            BUTTON_SHOW.src = './images/triangle.png'
            VIDEO.pause()
        }
    })
}
videoBackground()
//VIDEO SLIDER
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
//BUTTON MENU BURGER
const buttonMenuClick = (button) => {
    const BACKGROUND_MENU = document.querySelector('.menu__background')
    const MENU = document.querySelector('.menu')

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
//SCHEDULE LIST
const scheduleList = () => {
    const SCHEDULE_BUTTONS = document.querySelectorAll('.schedule__button-item')
    const SCHEDULE_ITEMS = document.querySelectorAll('.schedule__list-item')
    const SCHEDULE_CONTENT = document.querySelectorAll('.schedule__list-text')
    const SCHEDULE_BUTTON = document.querySelector('.schedule__button-list')
    //SLIDER
    const SLIDERS = document.querySelectorAll('.schedule__mobile-item')
    const BUTTON_LEFT = document.querySelectorAll('.schedule__left')
    const BUTTON_RIGHT = document.querySelectorAll('.schedule__right')
    const BUTTON = document.querySelector('.schedule__mobile-list')


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

    let offset = SLIDERS[0].clientWidth
    let count = 0

    BUTTON_RIGHT.forEach((element, index) => {
        BUTTON_RIGHT[index].addEventListener('click', () => {
            count++
            if (count !== SLIDERS.length) {
                BUTTON.style.transform = `translateX(-${offset * count}px`;
            } else {
                count = 0
                BUTTON.style.transform = `translateX(0px)`
            }
        })
    })

    BUTTON_LEFT.forEach((element, index) => {
        BUTTON_LEFT[index].addEventListener('click', () => {
            count--
            BUTTON.style.transform = `translateX(-${offset * count}px`;
        })
    })
}
scheduleList()
//SLIDER GALLERY
const sliderGallery = () => {
    const MAIN_GALLERY_LIST = document.querySelectorAll('.gallery__list-item');
    const GALLERY_LIST = document.querySelectorAll('.gallery__slider-item');
    const GALLERY = document.querySelector('.gallery__slider');
    const CLOSE = document.querySelector('.gallery__slider-close');
    const BUTTON_LEFT = document.querySelector('.gallery__slider-left');
    const BUTTON_RIGHT = document.querySelector('.gallery__slider-right');


    let currentIndex = 0;

   if(GALLERY) {
       GALLERY.addEventListener('click', (e) => {
           if(e.target === GALLERY) {
               GALLERY.classList.remove('gallery__slider-show');
               document.body.style.overflow = '';
           }
       })
   }

    MAIN_GALLERY_LIST.forEach((element, index) => {
        element.addEventListener('click', () => {
            currentIndex = index;
            GALLERY.classList.add('gallery__slider-show');
            document.body.style.overflow = 'hidden';
            GALLERY_LIST.forEach((item) => item.classList.remove('gallery__slider-show'));
            GALLERY_LIST[currentIndex].classList.add('gallery__slider-show');
        });
    });

    CLOSE.addEventListener('click', () => {
        GALLERY.classList.remove('gallery__slider-show');
        document.body.style.overflow = '';
        GALLERY_LIST.forEach((item) => item.classList.remove('gallery__slider-show'));
    });

    BUTTON_RIGHT.addEventListener('click', () => {

        GALLERY_LIST[currentIndex].classList.remove('gallery__slider-show');
        currentIndex = (currentIndex + 1) % GALLERY_LIST.length;
        GALLERY_LIST[currentIndex].classList.add('gallery__slider-show');
    });

    BUTTON_LEFT.addEventListener('click', () => {
        GALLERY_LIST[currentIndex].classList.remove('gallery__slider-show');
        currentIndex = (currentIndex - 1 + GALLERY_LIST.length) % GALLERY_LIST.length;
        GALLERY_LIST[currentIndex].classList.add('gallery__slider-show');
    });
};
sliderGallery();
//SLIDER GALLERY MOBILE
const sliderGalleryMobile = () => {
    const GALLERY = document.querySelector('.gallery__mobile')
    const BUTTON = document.querySelector('.program__conditions-button')
    const CLOSE = document.querySelector('.gallery__mobile-close')
    const BACKGROUND = document.querySelector('.gallery__mobile-background')

    if(BACKGROUND) {
        BACKGROUND.addEventListener('click', (e) => {
            if(e.target === BACKGROUND) {
                GALLERY.classList.remove('gallery__mobile-show');
                document.body.style.overflow = '';
            }
        })
    }

    BUTTON.addEventListener('click', () => {
        GALLERY.classList.add('gallery__mobile-show')
        document.body.style.overflow = 'hidden'
    })

    CLOSE.addEventListener('click', () => {
        GALLERY.classList.remove('gallery__mobile-show')
        document.body.style.overflow = ''
    })
}
sliderGalleryMobile()
//SLIDER MORE
const sliderMore = () => {
    const carousel = document.querySelector('.more__slider-list')
    const nextButton = document.querySelector('.next')
    const prevButton = document.querySelector('.prev')

    nextButton.addEventListener('click', () => {
        const firstCard = carousel.children[0]
        carousel.appendChild(firstCard)
        carousel.style.transition = 'none'
        carousel.style.transform = 'translateX(-288px)'
        setTimeout(() => {
            carousel.style.transition = 'transform 0.3s ease-in-out'
            carousel.style.transform = 'translateX(0)'
        }, 50)
    })

    prevButton.addEventListener('click', () => {
        const lastCard = carousel.children[carousel.children.length - 1]
        carousel.insertBefore(lastCard, carousel.children[0])
        carousel.style.transition = 'none'
        carousel.style.transform = 'translateX(-288px)'
        setTimeout(() => {
            carousel.style.transition = 'transform 0.3s ease-in-out'
            carousel.style.transform = 'translateX(0)'
        }, 50)
    })
}
sliderMore()
//BUTTON SELECT
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
//INFORMATION LIST
const informationList = () => {
    const INFORMATION_ITEMS = document.querySelectorAll('.information__list-item')
    const INFORMATION_BUTTONS = document.querySelectorAll('.information__button-item')
    const INFORMATION_CONTENT = document.querySelectorAll('.information__list-content')


    INFORMATION_ITEMS.forEach((element, index) => {

        element.addEventListener('click', () => {
            if (element) {
                INFORMATION_BUTTONS[index].classList.toggle('information__list-button')
                INFORMATION_CONTENT[index].classList.toggle('information__show')
            }
        })
    })
}
informationList()
//PRICE SLIDER
const priceSlider = () => {
    const BUTTON_RIGHT = document.querySelector('#right')
    const BUTTON_LEFT = document.querySelector('#left')
    const CARD = document.querySelector('.card')
    const CARD__LIST = document.querySelector('.price__cards')


    let offset = CARD.clientWidth + 20

    BUTTON_RIGHT.addEventListener('click', () => {
        CARD__LIST.style.transform = `translateX(-${offset}px`;
    });

    BUTTON_LEFT.addEventListener('click', () => {
        CARD__LIST.style.transform = `translateX(0px)`;
    });
}
priceSlider()
//PRICE LIST
const priceList = () => {
    const BLOCK_PRICE = document.querySelectorAll('.price__lists-top')
    const BUTTON_PRICE = document.querySelectorAll('.price__lists-button')
    const PRICE_LIST = document.querySelectorAll('.price__lists-item')

    BLOCK_PRICE[0].addEventListener('click', () => {
        BUTTON_PRICE[0].classList.toggle('information__list-button')
        return PRICE_LIST[0].classList.toggle('price__show')
    })

    BLOCK_PRICE[1].addEventListener('click', () => {
        BUTTON_PRICE[1].classList.toggle('information__list-button')
        return PRICE_LIST[1].classList.toggle('price__show')
    })
}
priceList()
