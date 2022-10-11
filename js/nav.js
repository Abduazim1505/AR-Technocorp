const navAnim = () => {
    const burger = document.querySelector('.main-header__menu');
    const nav = document.querySelector('.main-navigation__items');
    const navLinks = document.querySelectorAll('.main-navigation__items li');

    //    Toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active")
    })
};

navAnim();