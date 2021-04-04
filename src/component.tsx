/*[object Object]*/
import React from "react";

import { Container, Frame } from "./style";
import { Transformation } from "./types";

export const Animate = <P extends {}>(
  Component: React.ComponentType<P>
): React.FC<P & { transformation: Transformation }> => (props) => {
  const { transformation } = props;
  const rest = props as P;

  return (
    <Frame {...transformation}>
      <Container {...transformation}>
        <Component {...rest} />
      </Container>
    </Frame>
  );
};
