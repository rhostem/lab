/**
 * 010으로 시작하는 휴대폰 번호에 하이픈을 추가
 * 010-{1자리 이상의 숫자}-{4자리 숫자} 형태의 번호라고 가정함
 *
 * @param {[type]} mobileNumber [description]
 */
this.addHyphenToMobileNum = function (mobileNumber) {

  if (mobileNumber.constructor !== String) {
    mobileNumber = mobileNumber.toString();
  }

  var length = mobileNumber.length;

  // 010-1111-1111
  if (length === 11) {
    while (/(\d+)(\d{4})/.test(mobileNumber)) {
      mobileNumber = mobileNumber.replace(/(\d+)(\d{4})/, '$1' + '-' + '$2');
    }
  }
  // 010-111-1111, etc
  else if (length < 11) {
    while (/(\d+)(\d{3})(\d{4})/.test(mobileNumber)) {
      mobileNumber = mobileNumber.replace(/(\d+)(\d{3})(\d{4})/, '$1' + '-' + '$2' + '-' + '$3');
    }
  }

  return mobileNumber;

};