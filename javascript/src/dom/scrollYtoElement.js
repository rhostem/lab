import $ from 'jquery';

/**
 * 뷰포트의 시점을 선택한 요소까지 이동시킨다
 * @param  {[string]} selector [description]
 */
this.scrollYtoElement = function (selector) {
  $(selector).ready(function () {
    // 스크롤 이동
    var search_position = $(selector).position();
    window.scrollTo(0, search_position.top);
  });
};