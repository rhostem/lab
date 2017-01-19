this.hideIframePopup = function (option) {

  option = option === undefined ? {} : option;

  if (option.hideMask === undefined || option.hideMask) {
    this.hideMask();
  }

  $('#popup-iframe').remove();

};