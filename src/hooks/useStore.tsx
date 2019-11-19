import { useSelector } from "react-redux";

import { Store } from "@models/store";

export const useStore = () => {
  return useSelector<Store, Store>((s) => s);
};
