/**
 * 불투명 마스크 표시
 */
this.showMask = function (option) {

  option = (option === undefined) ? {} : option;

  var maskClassName =
    option.isShadowedMask ? 'mask' : 'mask mask-transparent';

  $body.append(`<div class="${maskClassName}"></div>`);
  $('.mask').css('height', this.getBodyHeight); // 높이 설정

  // if close callback is sent, bind event to mask
  if (typeof option.closeCb === 'function') {
    $('.mask').click(() => {
      this.hideMask();
      option.closeCb();
    });
  }
};

/**
 * 마스크 제거
 * @return {[type]} [description]
 */
this.hideMask = function () {

  var $mask = $('.mask');

  if ($mask.length > 0) {
    $mask.fadeOut(200);
    // delay를 주지 않으면 fadeout 효과를 적용시킬 수 없음
    setTimeout(function () {
      // 가장 나중에 추가한 마스크 1개만 제거함
      // 팝업이 2개 이상일 수 있기 때문에
      $mask.eq($mask.length - 1).remove();
    }, 220);
  }
};