$(document).ready(function() {
  // 배너 슬라이더
  $('.bannerSlider-slideContainer').slick({
    dots: true,
    dotsClass: 'bannerSlider-indicatorContainer',
    prevArrow: $('.bannerSlider-leftBtn'),
    nextArrow: $('.bannerSlider-rightBtn'),
  });
})