import { combineReducers } from 'redux';
import riskReducer from './riskReducer';

export default combineReducers({ risk: riskReducer });
