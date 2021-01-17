$(document).ready(function(){
    const toggleMenu = document.querySelector('.toggle-menu'); //иконкагамбургер
    const mobMenu = document.querySelector('.mobile-menu'); //мобильное меню
    const overlay = document.querySelector('.overlay'); //затемняющий фон при активном мобильном меню
    const nonescroll = document.querySelector('body'); //блокировка скролла при активном моб меню


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
        nonescroll.classList.remove('nonescroll');
    });
    overlay.addEventListener('click', function(){
        this.classList.remove('active');
        toggleMenu.classList.remove('active');
        mobMenu.classList.remove('active-menu');
        nonescroll.classList.remove('nonescroll');
    });

        
   
    // mixitUp
    // let containerEl = document.querySelector('#portfolio-projects');
    // let mixer = mixitup(containerEl, {
    //     classNames: {
    //         block: ""
    //      }
     
    // });
    //  кнопки фильтрации активный цвет 
    // $(function() {
    //     $("#btn .portfolio-nav_projects").click(function() {
    //         $("#btn .portfolio-nav_projects").removeClass("actives");         
    //         $(this).toggleClass("actives");
    //     })
    // });

    //  форма
    const formItems = document.querySelectorAll('.form-field');
     
    for(let item of formItems){
        const thisParent = item.closest('.form-item');
        const thisPlaceholder = thisParent.querySelector('.fake-placeholder');
    // если инпут в фокусе
    item.addEventListener('focus',function(){
        thisPlaceholder.classList.add('active');
    });
    // если инпут не в фокусе
    item.addEventListener('blur', function(){
        if(item.value.length > 0) {
            thisPlaceholder.classList.add('active');
        }
        else{
            thisPlaceholder.classList.remove('active');
        }
    })
    }
//form validate
    $('.contact-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'отсутствует символ @'
            },
            subject: {
                required: 'Введите тему сообщения'
            },
            message: {
                required: 'Введите текст сообщения'
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }
    })
// функция AJAX запроса на сервер 
function ajaxFormSubmit() {
    let string = $(".contact-form").serialize(); //сохраняем данные введенные в форму в строку
// формируем ajax запрос
$.ajax({
    type: "POST", //тип запросса - POST
    url: "php/mail.php",//куда отправляем запрос
    data: string, //какие данные щтправляем,в данном случае переменнная string
    // функция если все прошло успешно
    success: function (html) {
        $(".contact-form").slideUp(800);
        $('#answer').html(html);
    }
});
return false;
}
// отображение и скрытие карточек портфолио при ресайзе
$(window).on ('resize',function(){
    if($(window).width() <1200){
        $('.portfolio-small-card_link.card-hide').hide();
        $('.all-projects').fadeIn();
    }
    else{
        $('.portfolio-small-card_link.card-hide').fadeIn();
        $('.all-projects').hide();
    }
});

//  скрытие карточек при < 1200
    if($(window).width() <1200){
        $('.portfolio-small-card_link.card-hide').hide();   
    }
    else{
    $('.portfolio-small-card_link.card-hide').fadeIn();
    $('.all-projects').hide();  

    } 
// Отображение, скрытие карточек и смена слова кнопки по клику
    // $('.all-projects').click(function(){
    //     if($('.all-projects').hasClass('first')){
    //         $('.all-projects').text('Скрыть');
    //         $('.all-projects').removeClass('first');
    //         $('.all-projects').addClass('second');
    //         $('.portfolio-small-card_link.card-hide').fadeIn();
    //     }
    //     else{
    //         $('.all-projects').text('Смотреть все работы');
    //         $('.all-projects').removeClass('second');
    //         $('.all-projects').addClass('first'); 
    //         $('.portfolio-small-card_link.card-hide').hide();
    //     }
    // });
// иконка скролл вверх
    // $('#back-top').hide();
    //     $(window).scroll(function(){
    //         if($(this).scrollTop() > 300 ){
    //         $('#back-top').fadeIn();
    //         }
    // else{
    // $('#back-top').fadeOut();
    // }
    // }); 

    // показать кнопку скролл вверх
    $('#back-top').hide();
    $(window).scroll(function(){
        if($(this).width() < 1200){
            if( $(this).scrollTop() > 300 ){
                $('#back-top').fadeIn();
            }
            else{
                $('#back-top').fadeOut();
            }
        }
    });
// nave-page 
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });

    //валидация поле телефона 
    $(".phone").mask("+3(999)999-99-99");
    //ф-ция для позиции курсора
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    //ф-ция для позиции курсора для поля phone
    $('.phone').click(function () {
        $(this).setCursorPosition(1); // set position number
    });
})

