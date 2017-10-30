import * as MAIN from '../actions/main/type';

export const getMain = (state = {}, action) => {
  switch (action.type) {
    case MAIN.GET_MAIN_SUCCESS:
      return { ...state, list: action.data };
    case MAIN.GET_MAIN_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
