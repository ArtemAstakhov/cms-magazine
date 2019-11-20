import { Instrument } from "./instrument";

export type Store = {
  favorites: Instrument[],
  isFetching: boolean;
}
