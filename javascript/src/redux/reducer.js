export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state += action.data;

    case 'DELETE':
      return state -= action.data;

    default:
      break;
  }
}
