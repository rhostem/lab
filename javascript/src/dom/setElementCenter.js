/**
 * 요소를 뷰포트 가운데에 위치하게 함.
 * display: fixed
 */
this.setElementCenter = function (element) {
  var element_width = element.scrollWidth;
  var element_height = element.scrollHeight;

  $(element).css('position', 'fixed');
  $(element).css('top', '50%');
  $(element).css('left', '50%');

  // 팝업창의 top, left 는 50%
  // 가로, 세로 크기의 절반을 이동시켜서 뷰포트 가운데에 위치하게 함
  $(element).css('transform', 'translate(' + (-element_width / 2) + 'px,' + (-element_height / 2) + 'px )');
};