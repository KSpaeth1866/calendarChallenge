import * as types from '../actions/types';

const initialState = [
  {start: 30, end: 150},
  {start: 540, end: 600},
  {start: 560, end: 620},
  {start: 610, end: 670}
];

const timesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TIMES:
      return action.times;
    default:
      return state;
  }
};

export default timesReducer;
