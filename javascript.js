(function(){
    'use strict'
    //Nav-bar fixo 
    window.addEventListener('scroll', function(){
        let nav = document.querySelector('nav');
        nav.classList.toggle('sticky', scrollY > 10);
    });

    //Toggle menu
    let $nav = document.querySelector('nav');
    let $btn = document.querySelector('.nav-hamburger');

    let ariaControl = $btn.getAttribute('aria-controls');

    let $menu = document.getElementById(ariaControl);

    $nav.classList.remove('no-js');
    $nav.classList.add('js')

    $btn.addEventListener('click', function(){
        $nav.classList.toggle('menu-opened');

        let ariaExpanded = this.getAttribute('aria-expanded') === 'true';

        $btn.setAttribute('aria-expanded', !ariaExpanded);
        $menu.setAttribute('aria-expanded', !ariaExpanded);
    });

    //Botões menu
    let $btnMenu = document.querySelectorAll(".btn-menu");

    $btnMenu.addEventListener('click', function(){
        $nav.classList.toggle('menu-opened');

        let ariaClose = this.getAttribute('aria-expanded') === 'false';

        $btnMenu.setAttribute('aria-expanded', !ariaClose);
        $menu.setAttribute('aria-expanded', !ariaClose);
    });
})()