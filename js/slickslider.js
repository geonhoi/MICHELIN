$(function(){
    slickMain();
    slickEvent();
});


function slickMain() {
    $(".mainSlider").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:false,
        draggable:false,
        arrows:true,
        // adaptiveHeight:true,
        centerMode:true,
        // centerPadding:'300px',
        responsive: [
            {
              breakpoint: 1279,
              settings: {
                /* centerPadding:'20vw', */
                slidesToShow: 2,
                slidesToScroll: 2,
                dots:false,
                draggable:true,
                arrows:false,
                // adaptiveHeight:true,
                centerMode:true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                dots:false,
                draggable:true,
                arrows:false,
                // adaptiveHeight:true,
                centerMode:true,
                
              }
            },
        ],
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        /* 자바스크립트
        if (currentSlide !== nextSlide) {
            document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
                // timeout required or Slick will overwrite the classes
                setTimeout(() => next.classList.add('slick-current', 'slick-center'));
            });
        }
        */
        // IE 호환성을 고려한 제이쿼리
        if (currentSlide !== nextSlide) {
            $('.slick-center + .slick-cloned').each(function(index, node) {
                var $node = $(node);
                
                setTimeout(function() {
                    $node.addClass('slick-current');
                    $node.addClass('slick-center');
                });
            });
        }
    });
    
}

function slickEvent() {
    $(".galleryDetailSlider").slick({
        autoplaySpeed: 2500,
        dots: true,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        
        customPaging: function(slick, index) {
          var targetImage = slick.$slides.eq(index).find('img').attr('src');
          return '<img src=" ' + targetImage + ' "/>';
        }
    });

    
}