function slider() {
    const sliderNext = document.querySelector('.offer__slider-next'),
        slider = document.querySelector('.offer__slider'),
        sliderPrev = document.querySelector('.offer__slider-prev'),
        currentSlides = document.querySelector('#current'),
        totalSlides = document.querySelector('#total'),
        slides = document.querySelectorAll('.offer__slide'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
    
    function illuminationPoints(dots) {
        dots.forEach(item => item.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = '1';
    }
     
    function getCurrentNumber(slide) {
        if (slides.length < 10) {
            slide.textContent = `0${slideIndex}`;
        } else {
            slide.textContent = slideIndex;
        }
    }

    function moveSlides(item) {
        item.style.transform = `translateX(-${offset}px)`;
    }
    
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    // Slider 1
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        totalSlides.textContent = `0${slides.length}`;
        currentSlides.textContent = `0${slideIndex}`;
    } else {
        totalSlides.textContent = slides.length;
        currentSlides.textContent = slideIndex;
    }
        
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(item => {
        item.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);
    

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);

    }

    sliderNext.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        moveSlides(slidesField);

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        getCurrentNumber(currentSlides);

        illuminationPoints(dots);
    });

    sliderPrev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        moveSlides(slidesField);

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        getCurrentNumber(currentSlides);

        illuminationPoints(dots);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);
            moveSlides(slidesField);

            getCurrentNumber(currentSlides);

            illuminationPoints(dots);
        });
    });
}

module.exports = slider;