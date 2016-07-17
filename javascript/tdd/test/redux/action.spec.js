import expect from 'expect';
import * as actions from '../../src/redux/actions';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('todo detail')).toEqual({
      type: 'ADD_TODO',
      text: 'todo detail',
    });
  });

  it('toggleTodo 메소드는 TOGGLE_TODO action을 생성한다', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1,
    });
  });
});

