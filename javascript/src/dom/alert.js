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
