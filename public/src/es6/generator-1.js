
function shouldBeNonZero(value) {
  if (value !== 0)
    return true;
}

// define generator
function* filter(test, iterable) {
  for (var item of iterable) {
    if (test(item))
      yield item;
  }
}

var sample = [0, 1, 2, 3, 4];

var nonZeroFilter = filter(shouldBeNonZero, sample);
// generator's next() method returns object has 'value' and 'done' property
// console.log(nonZeroFilter.next());

var result = [];
for (item of nonZeroFilter) { // nonZeroFilter is interablen
  // push until property 'done' is true
  result.push(item);
}

console.log(result);
