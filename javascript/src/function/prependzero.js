/**
 * 한자리 숫자 앞에 0을 붙여서 return
 *
 * @param  {[Number]} num]
 * @return {[String or Number]}     [한자리 숫자라면 문자열 0을 붙여서 리턴, 아니면 그대로 리턴]
 */
this.prependZero = function (num) {

  var num_string = num.toString();

  if (num_string.length === 1) {
    return '0' + num_string;
  }
  return num_string;
};