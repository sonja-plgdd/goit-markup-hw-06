'use strict'

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const close = document.querySelector('.mobile-menu-close');
const closeModal = document.querySelector('.close-button');
const btn = document.querySelector('.button');
const modal = document.querySelector('.modal-overlay');
const form = document.querySelector('.form');

btn.addEventListener('click', () => {
    modal.classList.add('is-open');
    return;
});

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
});

close.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');

});

closeModal.addEventListener('click', () => {
    modal.classList.remove('is-open');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.remove('is-open');
});