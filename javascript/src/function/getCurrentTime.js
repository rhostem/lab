/**
 * 현재 시간 정보(local time)를 가진 객체를 반환
 * @return {[Object]} [년, 월, 일, 시, 분]
 */
this.getCurrentTime = function () {
  var date = new Date();
  var current = {};

  current.year = date.getFullYear();
  current.month = date.getMonth() + 1;
  current.day = date.getDate();
  current.hour = date.getHours();
  current.minute = date.getMinutes();

  return current;
};