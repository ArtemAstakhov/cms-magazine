import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AnyAction } from "redux";

import rootReducer from "@reducers";
import { Store } from "@models/store";

export default function configureStore(initialState?: Store) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk as ThunkMiddleware<Store, AnyAction>),
  );

  return store;
}
