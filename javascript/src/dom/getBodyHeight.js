/**
 *  body 전체 높이 구하기
 * @return {[type]} [description]
 */
this.getBodyHeight = function () {
  var body = document.body,
    html = document.documentElement;

  // Chrome에서는 scrollHeight
  var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

  return height;
};
