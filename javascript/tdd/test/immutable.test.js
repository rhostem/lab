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
      expect(list.getIn([0, 'nested', 'data'])).to.equal(undefined);
    });
  });
});
