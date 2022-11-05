import { createStore, combineReducers, applyMiddleware } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import { Nvien } from "./dsnv";
import { Pban } from "./dsphongban";
import { Pbanid } from "./dscanhanpb";
import { Luong } from "./dsluong";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      nvien: Nvien,
      pban: Pban,
      luong: Luong,
      pbanid: Pbanid,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
