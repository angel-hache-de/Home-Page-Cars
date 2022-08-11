import React from "react";
import styled from "styled-components";

export interface IMargineProps {
  margin: number | string;
  direction: "horizontal" | "vertical";
}

const HorizontalMargin = styled.span<IMargineProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<IMargineProps>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const Marginer = (props: IMargineProps) => {
  const { direction } = props;
  if (direction === "horizontal") return <HorizontalMargin {...props} />;

  return <VerticalMargin {...props} />;
};

Marginer.defaultProps = {
  direction: "horizontal",
};

export { Marginer };
