import * as ActionTypes from "./ActionTypes";

export const Pban = (
  state = {
    isLoading: true,
    errMess: null,
    pban: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PB:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        pban: action.payload,
      };
    case ActionTypes.PB_LOADING:
      return { ...state, isLoading: true, errMess: null, pban: [] };
    case ActionTypes.PB_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
