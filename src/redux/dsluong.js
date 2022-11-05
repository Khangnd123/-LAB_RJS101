import * as ActionTypes from "./ActionTypes";

export const Luong = (
  state = {
    isLoading: true,
    errMess: null,
    luong: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_LUONG:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        luong: action.payload,
      };
    case ActionTypes.LUONG_LOADING:
      return { ...state, isLoading: true, errMess: null, luong: [] };
    case ActionTypes.LUONG_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
