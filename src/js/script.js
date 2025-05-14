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