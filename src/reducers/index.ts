import { AnyAction } from "redux";

import { Store } from "@models/store";
import { SET_FAVORITES } from "@constants/store";

const initialState: Store = {
  favorites: [],
};

export default function state(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_FAVORITES:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}