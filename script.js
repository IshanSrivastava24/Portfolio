$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up script


    // $('.scroll-up-btn').click(function(){
    //     $('html').animate({scrollTop: 0});
    // });



//typing animation script


var typed = new Typed(".typing",{
    strings: ["Web Developer" ,  "Video Editor" , "Graphic Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer" , "Video Editor" , "Graphic Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});


    //toggle menu/navbar script


    $('.menu-btn').clik(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });
});