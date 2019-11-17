import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "../../constants";
import { FavoritesPage } from "../../pages/Favorites";
import { InstrumentsPage } from "../../pages/Instruments";

export const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path={ROUTES.favorites} component={FavoritesPage} />
      <Route path={ROUTES.instruments} component={InstrumentsPage} />
    </Switch>
  );
}
