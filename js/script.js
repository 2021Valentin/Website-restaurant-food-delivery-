    require('es6-promise').polyfill();
    import 'nodelist-foreach-polyfill';
    import tabs from './modules/tabs';
    import modal from './modules/modal';
    import calc  from './modules/calc';
    import cards from './modules/cards';
    import forms from './modules/forms';
    import slider from './modules/slider';
    import timer  from './modules/timer';
    import { openModal } from './modules/modal';
    
window.addEventListener('DOMContentLoaded', () => {
    const modalTimerID = setTimeout( () => openModal('.modal', modalTimerID), 50000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerID);
    calc();
    cards();
    forms("form", modalTimerID);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    timer('.timer', '2023-02-09');







});