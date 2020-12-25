
const toggleMenu = document.querySelector('.toggle-menu'); //иконкагамбургер
const mobMenu = document.querySelector('.mobile-menu'); //мобильное меню
const overlay = document.querySelector('.overlay'); //затемняющий фон при активном мобильном меню
const nonescroll = document.querySelector('body'); //блокировка скролла при ативном моб меню

toggleMenu.addEventListener('click', function(){
    this.classList.toggle('active');
    mobMenu.classList.toggle('active-menu');
    overlay.classList.toggle('active');
    nonescroll.classList.toggle('nonescroll');
});
mobMenu.addEventListener('click', function(){
    this.classList.remove('active-menu');
    toggleMenu.classList.remove('active');
    overlay.classList.remove('active');
    nonescroll.classList.remove('active');
});
overlay.addEventListener('click', function(){
    this.classList.remove('active');
    toggleMenu.classList.remove('active');
    mobMenu.classList.remove('active-menu');
    nonescroll.classList.remove('nonescroll');
});

// mixitUp
let containerEl = document.querySelector('#portfolio-projects');
let mixer = mixitup(containerEl, {
    classNames: {
        block: ""
    }
});

//  кнопки фильтрации активный цвет 
$(function() {
    $("#btn .portfolio-nav_projects").click(function() {
        $("#btn .portfolio-nav_projects").removeClass("active");         
        $(this).toggleClass("active");
    })
});