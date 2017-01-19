/**
 * 요소를 뷰포트 최상단에서 y축으로 top 만큼 떨어진 위치에 위치시킨다.
 * @param {[String]} selector [description]
 * @param {[Number]} top      [unit=px]
 */
this.setTopPositionFromViewport = function (selector, top) {

  var viewport_positionY = window.scrollY;
  document.querySelector(selector).style.top = (viewport_positionY + top) + 'px';
};
