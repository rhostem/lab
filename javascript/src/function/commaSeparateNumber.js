/**
 * 숫자 3자리마다 comma 추가
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 */
this.commaSeparateNumber = function (val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
};