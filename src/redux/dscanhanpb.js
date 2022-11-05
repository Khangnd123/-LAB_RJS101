import * as ActionTypes from "./ActionTypes";

export const Pbanid = (
  state = {
    isLoading: true,
    errMess: null,
    pbanid: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PBID:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        pbanid: action.payload,
      };
    case ActionTypes.PBID_LOADING:
      return { ...state, isLoading: true, errMess: null, pbanid: [] };
    case ActionTypes.PBID_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
