import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { useStore } from "@hooks";

interface IParams {
  code: string;
}

const InstrumentDetails: React.FunctionComponent<RouteComponentProps<IParams>> = ({
  match,
}) => {
  const { favorites } = useStore();
  const instrument = favorites.find((f) => f.code === match.params.code);

  if (!instrument) {
    throw new Error("No instument found");
  }

  return (
    <div>
      Instrument: {instrument.title}
    </div>
  );
}

export default InstrumentDetails;
