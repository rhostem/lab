import expect from 'expect';

const adder = require('../../src/function/adder');

describe('function', () => {
  describe('adder', () => {
    it('파라메터 2개의 합을 리턴한다', () => {
      expect(adder(1, 2)).toEqual(3);
    });
  });
});
