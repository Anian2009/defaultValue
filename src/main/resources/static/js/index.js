$(document).ready(function () {
    console.log("hello index.js");

    var  sliderIndex = 1;

    $('.menu-button').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-button_active');
        $('.navigation').toggleClass('navigation_active');
        $('.cont').toggleClass('cont-active');
    });

    $('.previous').click(function () {
        showSlides(sliderIndex+=-1);
    });

    $('.next').click(function () {
        showSlides(sliderIndex+=1);
    });


    showSlides(sliderIndex);
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('slides');

        if (n>slides.length){
            sliderIndex=1;
        }
        if (n<1){
            sliderIndex = slides.length;
        }
        for(i=0; i<slides.length;i++){
            slides[i].style.display = 'none';
        }
        slides[sliderIndex-1].style.display = "flex";
    }
});