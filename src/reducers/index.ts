import { AnyAction } from "redux";

import { Store } from "@models/store";
import { SET_FAVORITES, SET_FETCHING } from "@constants/store";

const initialState: Store = {
  favorites: [],
  isFetching: false,
};

export default function state(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_FAVORITES:
      return { ...state, favorites: action.payload };
    case SET_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
}