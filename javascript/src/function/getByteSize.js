/**
 * 문자열 바이트 크기 구하기
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
this.getByteSize = function (targetString) {

  var size = (function (s, b, i, c) {
    for (b = i = 0; c = s.charCodeAt(i++); b += c >> 11 ? 2 : c >> 7 ? 2 : 1); // euc-kr
      // for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1); // utf-8
    return b;
  })(targetString);

  return size;
};