import { SET_RISK } from './types';

export const setRiskSelected = (risk) => {
  return {
    type: SET_RISK,
    payload: risk,
  };
};
