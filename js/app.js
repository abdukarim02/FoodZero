// alert('hello');
const burger = document.querySelector('.header__menu-burger');
        const menu = document.querySelector('.header__menu-body');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
});
const mainOfferSwiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    speed: 5000,
    navigation: {
        nextEl: ".swiper-button-next", // Класс кнопки "вперед"
        prevEl: ".swiper-button-prev", // Класс кнопки "назад"
    },
    pagination: {
        el: ".swiper-pagination", // Класс контейнера пагинации
        type: "fraction", // Пагинация в формате "цифры"
    },
});


// 