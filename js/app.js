// alert('hello');
const burger = document.querySelector('.header__menu-burger');
        const menu = document.querySelector('.header__menu-body');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
        });