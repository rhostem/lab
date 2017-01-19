function shouldBeNonZero(value) {
  return Number(value) !== 0 ? true : false;
}

// define generator
function* filter(test, iterable) {
  for (const item of iterable) {
    if (test(item)) {
      yield item;
    }
  }
}

const sampleNumbers = [0, 1, 2, 3, 4];
const nonZeroFilter = filter(shouldBeNonZero, sampleNumbers);

// generator's next() method returns object has 'value' and 'done' property
// console.log(nonZeroFilter.next());
const result = [];

for (const item of nonZeroFilter) { // nonZeroFilter is interable
  // push until property 'done' is true
  result.push(item);
}

console.log(result);

export default code;