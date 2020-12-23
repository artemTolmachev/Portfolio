

const toggle = document.querySelector('.toggle-menu');

toggle.addEventListener('click', function(){
    this.classList.toggle('active');

});



let containerEl = document.querySelector('#portfolio-projects');
let mixer = mixitup(containerEl, {
    classNames: {
        block: ""
    }
});
 
$(function() {
    $("#btn .portfolio-nav_projects").click(function() {
        $("#btn .portfolio-nav_projects").removeClass("active");         
        $(this).toggleClass("active");
    })
});