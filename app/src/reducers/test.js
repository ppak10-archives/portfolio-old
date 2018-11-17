const initialState = {};

export default (state = initialState, {type, ...payload}) => {
  switch(type) {
    case 'ON_TEST':
      return {...state, ...payload};
    default:
      return state;
  }
}
