import { expect } from 'chai';
import { reducer } from './reducer';
import sinon from 'sinon';

/**
  redux는 actions를 순차적으로 처리할 때 Array.prototype.reduce 메소드를 이용한다.

  action 객체로 배열을 만든 후 reduce 메소드를 호출한다.
  콜백함수로 reducer, initialValue로 state를 지정한다.
  reducer 함수 내부에서 콜백 함수로 변경된 state를 다시 리턴하면 reducer 함수의 파라메터는
  항상 state(=prev), action(=next)이 된다.
 */
describe('redux reducer', () => {
  const actions = [
    { type: 'ADD', data: 1 },
    { type: 'ADD', data: 10 },
    { type: 'DELETE', data: 10 },
  ];
  const state = 0;
  let result;
  let reducerSpy;

  beforeEach(() => {
    reducerSpy = sinon.spy(reducer);
    result = actions.reduce(reducerSpy, state);
  });

  it('reducer는 action의 수만큼 실행된다.', () => {
    expect(reducerSpy.callCount).to.equal(actions.length);
  });

  it('reducer 함수를 reduce한 결과는 action을 순차적으로 처리한 값과 같다.', () => {
    let s = Number(state);

    // iteration
    actions.forEach((action) => {
      s = reducer(s, action);
    })

    expect(s).to.equal(result);
  });
});
