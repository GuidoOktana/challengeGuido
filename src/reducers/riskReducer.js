import { SET_RISK } from '../actions/types';

const INITIAL_STATE = { riskSelected: 1 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RISK:
      return { ...state, riskSelected: action.payload };
    default:
      return state;
  }
};
