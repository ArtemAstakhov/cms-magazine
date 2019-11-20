import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import { ROUTES } from "@constants";

const Loader: React.FunctionComponent = () => (
  <div>
    Loading...
  </div>
);

const FavoritesPage = Loadable({
  loader: () => import("@pages/Favorites"),
  loading: () => <Loader />,
});

const InstrumentsPage = Loadable({
  loader: () => import("@pages/Instruments"),
  loading: () => <Loader />,
});

const InstrumentDetailsPage = Loadable({
  loader: () => import("@pages/InstrumentDetails"),
  loading: () => <Loader />,
});

export const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path={ROUTES.favorites} component={FavoritesPage} />
      <Route path={ROUTES.instruments} component={InstrumentsPage} />
      <Route path={`${ROUTES.instrument}/:code`} component={InstrumentDetailsPage} />
    </Switch>
  );
}
