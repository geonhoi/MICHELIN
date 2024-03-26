$(function(){
    scrollEvent(".about_container > div:nth-of-type(2) > h3","500");
    scrollEvent(".about_container > div:nth-of-type(3) > h3","500");
})




function scrollEvent(target,Nunval) {
    $(window).scroll(function(){
      // var targetoffset = $(imgEvent).offset().top;
    var addACt = $(target).siblings("figure");
    // console.log(addACt);
    var imgPos = $(target).offset().top - Nunval;
    var scrollPos = $(this).scrollTop();
  
    if(scrollPos >= imgPos){
      $(addACt).addClass('active');
    }else{
      $(addACt).removeClass('active');
    }
    });
}