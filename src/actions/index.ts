import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { SET_FAVORITES, SET_FETCHING } from "@constants/store";
import { Instrument } from "@models/instrument";
import { Store } from "@models/store";

type ThunkResult<R> = ThunkAction<R, Store, undefined, AnyAction>;

function setFavorites(favorites: Instrument[]) {
  return {
    type: SET_FAVORITES,
    payload: favorites,
  }
}

export function setFetching(fetching: boolean) {
  return {
    type: SET_FETCHING,
    payload: fetching,
  }
}

export function removeFavorite(id: number): ThunkResult<void> {
  return (dispatch, getState) => {
    dispatch(updateFavorites(getState().favorites.filter((f) => f.id !== id)));
  }
}

export function toggleFavorite(fav: Instrument): ThunkResult<void> {
  return (dispatch, getState) => {
    const favorites = getState().favorites.slice();
    const currentIndex = favorites.findIndex((f) => f.id === fav.id);

    if (currentIndex !== -1) {
      favorites.splice(currentIndex, 1);
    } else {
      favorites.push(fav);
    }

    dispatch(updateFavorites(favorites));
  }
}

export function updateFavorites(faves: Instrument[]): ThunkResult<void> {
  return (dispatch) => {
    localStorage.setItem("faves", JSON.stringify(faves));

    dispatch(setFavorites(faves));
  }
}