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
};d