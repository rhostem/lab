import { List, Map } from 'immutable';
import { expect } from 'chai';

describe('immutable List 테스트', () => {
  let list;
  let map;

  it('List 내부의 Map을 getIn 메소드로 접근한다.', () => {
    list = List();
    list = list.push(Map({
      key: 1,
      data: 'sample',
      nested: {
        data: 'nested data',
      },
    }));

    expect(list.getIn([0, 'key'])).to.equal(1);
    expect(list.getIn([0, 'data'])).to.equal('sample');

    // iterable이 아닌 일반 객체는 getIn으로 가져올 수 없다.
    expect(list.getIn([0, 'nested', 'data'])).to.equal(undefined);
  });
});
