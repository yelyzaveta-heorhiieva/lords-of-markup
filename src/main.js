const open =
    document.querySelector('.burger-btn');

    const close =
    document.querySelector('.mobile-btn');


const menu =
    document.querySelector('.mobile-menu');

open.addEventListener('click',
    function () {
        menu.classList.add('is-open');
    });

    close.addEventListener('click',
    function () {
        menu.classList.remove('is-open');
    });