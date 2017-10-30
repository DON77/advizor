import { combineReducers } from 'redux'

import * as MAIN from './main-reducer';

export default combineReducers({
  ...MAIN
})