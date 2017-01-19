import expect from 'expect';
import { Foo } from './class-example.js';

describe('class Foo', function () {
  var foo;

  before(function () {
    foo = new Foo();
  })

  it('sum method return sum of two parameters', function () {
    expect(foo.sum(1,2)).toEqual(3);
  });
});