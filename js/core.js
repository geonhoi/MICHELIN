$(function(){
  headerEffect();
  customSelect(".index_customSelect");
  customSelect(".list_customSelect");
  customSelect(".value_customSelect");
  customSelect(".mobile_customSelect");
  customSelect("footer > div:nth-of-type(2) > div > ul");
  slider(".tickerSlider","horizontal",true,true,100000,16,3,100/* ,0,false */);
  tabControl(".tabBtn",".tabBox");
  $(".fitMaps").fitVids();
  btnSelect(".list_container .wrap div:nth-of-type(1) > div form fieldset:nth-of-type(2) input");
  viewSwap();
  reSizeUI();
  searchPanel();
  navActive(".mobileNav");
  popupEvent();
});
function reSizeUI(){
  $(window).on('resize',function(){
    if(window.matchMedia("(max-width: 767px)").matches) {
      console.log("mobile");
    }else{
      console.log("desktop");
    }
  }); 
}

function tabControl(openBtn,tabBox){
  var currentTabName = '';
  $(openBtn).click(function(){
      $(openBtn).removeClass("active");
      $(this).addClass("active");
      currentTabName = "#" + $(this).attr("data-tabName");
      $(tabBox).removeClass("active");
      $(currentTabName).addClass("active");
  });
}


function headerEffect(){
  var Offset = $( 'header' ).offset();
  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > Offset.top ) {
      $( 'header' ).addClass( 'fixed' );
    }
    else {
      $( 'header' ).removeClass( 'fixed' );
    }
  });
}


function slider(target,modeVal,tickVal,tickHover,speedVal,maxVal,minVal,slideW,slideM,pagernon){
  $(target).bxSlider({
    mode: modeVal,
    ticker: tickVal,
    tickerHover: tickHover,
    speed: speedVal,
    maxSlides: maxVal,
    minSlides: minVal,
    slideWidth: slideW,
    slideMargin: slideM,
    pager: pagernon,
    moveSlides: 2
  });
}
function detailGallery(){
  $(".galleryDetailSlider").bxSlider({
    mode: 'fade',
    pagerCustom: '.galleryThumbPager',
    controls: false
  });
}

function customSelect(target){
  $(target).click(function(){
      $(this).toggleClass("active");
  });
  $(target + " li").click(function(){
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
  });
};

function btnSelect(target) {
  $(target).click(function() {
    if ($(target).hasClass('list_btn')) {
        $(target).removeClass('active');
        $(this).addClass('active');
        
    }else if($(target).hasClass('grid_btn')) {
      $(target).removeClass('active');
      $(this).addClass('active');
    }
  })
}



function viewSwap(){
  var btn = $(".list_container .wrap div div input[type='button']");
  var viewer = $("[class$='_View']");
  var target = null;
  btn.click(function(){
    $(btn).removeClass("active");
    $(this).addClass("active");
    target = $(this).val()+"_View";
    viewer.attr("class",target);
  });
}



function searchPanel(){
  $("input[value='searchPanelButton']").click(function(){
    $(this).toggleClass("active");
    $(this).parent().toggleClass("active");
  });
}


function navActive(text01) {
  $(text01).click(function(){
      $(this).toggleClass('active');
      $(this).siblings().toggleClass("active");
  });
}

function popupEvent() {
  var closeBtn = $('.popup > div > button')
  $(closeBtn).click(function () {
    $('.popup').addClass('active')
    
  })
}