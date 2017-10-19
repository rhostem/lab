// https://www.testdome.com/questions/javascript/closures/11099?questionIds=11100,11099&generatorId=14&type=fromtest&testDifficulty=Hard

(function(global) {
  function registerHandlers() {
    var as = document.getElementsByTagName('a')

    for (var i = 0; i < as.length; i++) {
      eventAdder(as[i], i)
    }
  }


  function eventAdder(el, index) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      alert(index);
    })
  }

  registerHandlers()
}(window));

