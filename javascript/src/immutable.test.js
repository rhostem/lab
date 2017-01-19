import Immutable, { List, Map } from 'immutable';
import { expect } from 'chai';

describe('immutable 데이터 테스트', () => {
  let list;
  let map;

  describe('immutable Map 테스트', () => {
    it('immutable Map에서 중첩된 객체의 값을 변경하면 해당 객체만 변경되고 나머지 객체(sibling)는 변경되지 않는다.', () => {
      map = Immutable.fromJS({
        result: {
          items: [],
          totalCount: 0,
        },
        option: {
          startDate: null,
          endDate: null,
        }
      });

      const before = map;

      after = map.setIn(['result', 'totalCount'], 10);

      // result는 새로운 Map이 되었지만 option은 기존의 Map 객체를 그대로 유지한다.
      expect(before.get('result') === after.get('result')).to.be.equal(false);
      expect(before.get('option') === after.get('option')).to.be.equal(true);
    });
  });

  it('Map으로 구성된 List에서 1개의 아이템의 값이 변경되어도 나머지 아이템의 레퍼런스는 변경되지 않는다.', () => {
    const before = Immutable.fromJS([
      { a: 1, b: 2 },
      { a: 3, b: 4 },
      { a: 5, b: 6 },
    ]);

    const after = before.setIn(['0', 'a'], 10);
    expect(before.get(0)).to.not.equal(after.get(0));
    expect(before.get(1)).to.equal(after.get(1));
    expect(before.get(2)).to.equal(after.get(2));
  });

  describe('immutable List 테스트', () => {
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
      // Map은 전달된 객체의 1-level key-value만 Immutable로 전환한다.
      // deep conversion은 fromJS를 사용해야 한다.
      expect(list.getIn([0, 'nested', 'data'])).to.equal(undefined);
      expect(list.getIn([0, 'nested'])).to.be.an.instanceof(Object);
      expect(list.getIn([0, 'nested'])).to.not.be.an.instanceof(Map);
    });
  });
});
