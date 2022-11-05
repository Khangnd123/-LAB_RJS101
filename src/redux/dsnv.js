import * as ActionTypes from "./ActionTypes";

export const Nvien = (
  state = {
    isLoading: true,
    errMess: null,
    nvien: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_NV:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        nvien: action.payload,
      };
    case ActionTypes.NV_LOADING:
      return { ...state, isLoading: true, errMess: null, nvien: [] };
    case ActionTypes.NV_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
