import * as React from "react";
import { Dot } from "recharts";

const RepositoryGraphDot = (props) => {
  const { dataKey, payload } = props;
  const { publicId } = payload;
  const value = payload[dataKey];

  return (
    <Dot
      {...props}
      role={`dot-${dataKey}-${publicId}`}
      aria-label={`dot-${dataKey}-${value}`}
    />
  );
};

export default RepositoryGraphDot;
