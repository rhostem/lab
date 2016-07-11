import $ from 'jquery';

/**
 * Javascript utility methods
 */
function Util() {

  // private variables
  var self = this;
  var $body = $('body');

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

  /**
   * 요소를 뷰포트 최상단에서 y축으로 top 만큼 떨어진 위치에 위치시킨다.
   * @param {[String]} selector [description]
   * @param {[Number]} top      [unit=px]
   */
  this.setTopPositionFromViewport = function (selector, top) {

    var viewport_positionY = window.scrollY;
    document.querySelector(selector).style.top = (viewport_positionY + top) + 'px';

  };

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


  this.hideIframePopup = function (option) {

    option = option === undefined ? {} : option;

    if (option.hideMask === undefined || option.hideMask) {
      this.hideMask();
    }

    $('#popup-iframe').remove();

  };


  /**
   * 불투명 마스크 표시
   */
  this.showMask = function (option) {

    option = (option === undefined) ? {} : option;

    var maskClassName =
      option.isShadowedMask ? 'mask' : 'mask mask-transparent';

    $body.append(`<div class="${maskClassName}"></div>`);
    $('.mask').css('height', this.getBodyHeight); // 높이 설정

    // if close callback is sent, bind event to mask
    if (typeof option.closeCb === 'function') {
      $('.mask').click(() => {
        this.hideMask();
        option.closeCb();
      });
    }

  };


  /**
   * 마스크 제거
   * @return {[type]} [description]
   */
  this.hideMask = function () {

    var $mask = $('.mask');

    if ($mask.length > 0) {
      $mask.fadeOut(200);
      // delay를 주지 않으면 fadeout 효과를 적용시킬 수 없음
      setTimeout(function () {
        // 가장 나중에 추가한 마스크 1개만 제거함
        // 팝업이 2개 이상일 수 있기 때문에
        $mask.eq($mask.length - 1).remove();
      }, 220);
    }
  };

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

  /**
   * custom alert 팝업 표시
   *
   * @param  {[Object]} options
   */
  this.showAlert = function (option = {}) {

    // get values from option
    var {
      msg = 'alert', // 'alert' is default
      closeCallback = this.hideAlert,
      showMask = true,
      isImmutable = false,
      isWarning = false,
    } = option;

    var className = 'popup alert centered';
    // 경고 얼럿일 경우
    if (isWarning) {
      className += ' red';
    }
    // 닫기 불가능한 얼럿일 경우
    if (isImmutable) {
      className += ' immutable';
    }

    if (showMask) {
      self.showMask({
        // bind closeCallback for closing mask
        closeCb: closeCallback,
      });
    }

    $body.append(`
      <div class="${className}">
        <div class="message">
          ${msg}
        </div>
      </div>`
    );

    $('.popup.alert').ready(function () {
      // bind event to the alert
      // ========================================
      $('.popup.alert').click(function (e) {
        closeCallback();
      });

      // bind ESC key to close
      $body.on('keyup', (e) => {
        if (e.which == 27) {
          closeCallback();
        }
      });
    });

  };

  /**
   * custom alert 숨기기
   * immutable 클래스가 있으면 제거하지 않는다.
   *
   * @param  {[Object]} alert [이벤트 콜백의 this]
   */
  this.hideAlert = function ($alert) {

    if ($alert === undefined) {
      $alert = $('.popup.alert');
    }

    if (!$alert.hasClass('immutable')) {
      $alert.remove();
      this.hideMask();
    }

    $body.off('keyup');

  }.bind(this);

  /**
   * 알림창의 메시지 변경
   */
  this.changeAlertMsg = function (msg) {
    $('.popup.alert .message').empty();
    $('.popup.alert .message').append(msg);
  };

  /**
   * immutable 클래스로 인해 닫기가 동작하지 않는 알림창을
   * 닫을 수 있게 만든다
   * @return {[type]} [description]
   */
  this.makeAlertRemovable = function () {
    $('.popup.alert').removeClass('immutable');
  };

  /**
   * 예/아니오 확인 팝업 표시
   * 마스크는 조건에 따라 함께 표시한다
   *
   * @param  {[Object]} options [className, message, showMask, value, yesCallback, noCallback ]
   * @return {[type]}         [description]
   */
  this.showConfirm = function (option = {}) {

    var {
      msg = 'alert',
      showMask = true,
      noCallback = this.hideConfirm,
      yesCallback = this.hideConfirm,
      isWarning = false,
      value = '',
    } = option;

    var className = 'popup confirm centered';

    if (isWarning) {
      className += ' red';
    }

    var template =
      '<div class=\"' + className + '\">' +
        '<input type=\"hidden\" value=\"' + value + '\"></input>' +
        '<div class=\"message\">' + msg + '</div>' +
        '<div class=\"btn-wrapper\">' +
          '<button class=\"no\">아니오</button>' +
          '<button class=\"yes\">예</button>' +
        '</div>' +
      '</div>';

    $body.append(template);

    // 마스크 표시
    if (showMask) {
      // bind noCallback for clicking mask
      self.showMask({
        closeCb: noCallback,
      });
    }

    // 예, 아니오 이벤트 연결
    $('.popup.confirm .no').click(function () {
      noCallback();
    });

    $('.popup.confirm .yes').click(function () {
      yesCallback();
    });

    // esc 키 이벤트 연결
    $body.on('keyup', (e) => {
      if (e.which == 27) {
        noCallback();
      }
    });

  };


  /**
   * 확인 창 닫기. 마스크는 함께 닫지 않는다.
   */
  this.hideConfirm = function (option) {
    // set default
    option = (option === undefined ? {} : option);

    option.hideMask =
      option.hideMask === undefined ? true : option.hideMask;

    $('.popup.confirm').remove();
    if (option.hideMask === true) {
      self.hideMask();
    }
    $body.off('keyup');
  };


  /**
   * 지정된 페이지로 이동
   * 상대 경로를 직접 지정하면 firefox에서 기능하지 않는 문제가 있음.
   * location.origin으로 절대 경로를 가져와서 이동할 페이지를 지정한다.
   *
   * @param  {[String]} url [ 루트(/)를 포함한 상대경로 ]
   */
  this.redirectPage = function (url) {
    window.location = window.location.origin + url;
  };


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

  /**
   * return Date Object from a date string like 'yyyy-mm-dd'
   * month should be decreased by 1
   *
   * @param  {[String]} dateStr [yyyy-mm-dd]
   * @return {[Object]} date
   */
  this.parseDateYYYYMMDD = function (dateStr) {
    var dates = dateStr.split('-');

    dates = dates.map(function (item, index) {
      if (index === 1) { // if month
        return item - 1;
      } else {
        return item;
      }
    });

    return new Date(dates[0], dates[1], dates[2]);
  };

}

export default new Util();

