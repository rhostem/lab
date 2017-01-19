/**
 * url을 팝업 레이어 내부의 iframe 안에 불러옴
 * @param  {[type]} option [url, width, height]
 */
this.showIframePopup = function (option = {}) {

  var {
    width = '400px',
    height = '680px',
    url = '/',
  } = option;

  $('body').append(
    '<div class="popup popup-padding centered-x" id="popup-iframe">' +
      '<div class="clearfix">' +
        '<button class="btn-close-popup l-float-right" title="닫기"><i class="fa fa-times "></button>' +
      '</div>' + // font awesome
      '<iframe width="' + width + '" height="' + height + '" src="' + url + '"></iframe>' +
    '</div>'
    );

  $('#popup-iframe').ready(function () {

    self.setTopPositionFromViewport('.popup', 70);
    $('#popup-iframe .btn-close-popup').click(function () {
      self.hideIframePopup();
    });

  });

  this.showMask();

  // bind event to hide alert when clicking mask
  $('.mask').ready(function () {
    $('.mask').click(function () {
      self.hideIframePopup();
    });
  });
};