/**
 * templeate leteral 앞에 함수명(태그)을 붙이면
 * literal과 substitution을 인자로 함수를 실행한다.
 * @param  {[String]}    literals      [substitution으로 구분된 문자열]
 * @param  {...[String]} substitutions [substitution]
 * @return {[String]}                  [result string]
 */
function tag(literals, ...substitutions) {
  let result = '';
  for (var i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }

  result += literals[literals.length - 1]; // prints last literal

  return result;
}

let count = 10;
let price = 2.5;

// executes tag function with leteral string
let msg = tag`price of ${count} items is $${(count * price).toFixed(2)}.`;

console.log(msg);
