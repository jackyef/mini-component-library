import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizeStyles = {
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--container-radius": "8px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0",
    "--container-radius": "4px",
  },
  small: {
    "--height": "8px",
    "--padding": "0",
    "--container-radius": "4px",
  },
};

const Container = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--container-radius);
  overflow: hidden;
  `;
  
const FillWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

const Fill = styled.div`
  display: block;
  height: 100%;
  background-color: ${COLORS.primary};
  width: ${p => p.progress};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Container
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={sizeStyles[size]}
    >
      <FillWrapper>
        <Fill progress={`${value}%`} style={sizeStyles[size]} />
      </FillWrapper>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Container>
  );
};

export default ProgressBar;
