document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.header__burger-btn');
    const headerSection = document.querySelector('.header-section');
    const body = document.querySelector('body');
    if (burgerBtn && headerSection) {
      burgerBtn.addEventListener('click', function () {
        headerSection.classList.toggle('is-shown');
        body.classList.toggle('cropped');
      });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.header__burger-btn');
    const headerSection = document.querySelector('.header-section');
    const body = document.querySelector('body');
    const filterMobileBtnArea = document.querySelector('.catalog__filter-mobile-area');
    const asideCatalog = document.querySelector('.aside-section--catalog');
    if (burgerBtn && headerSection) {
      burgerBtn.addEventListener('click', () => {
        headerSection.classList.toggle('is-shown');
        body.classList.toggle('cropped');
      });
    }
    if (filterMobileBtnArea && asideCatalog) {
      filterMobileBtnArea.addEventListener ('click', () => {
        filterMobileBtnArea.classList.toggle('is-chosen')
        asideCatalog.classList.toggle('is-shown');
        body.classList.toggle('not-scrolled');
      });
    }
});