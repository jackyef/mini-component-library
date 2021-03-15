import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizeStyles = {
  small: {
    '--gap': '8px',
    '--fontSize': `${14 / 16}rem`,
  },
  large: {
    '--gap': '12px',
    '--fontSize': `${18 / 16}rem`,
  },
}

const StyledIcon = styled(Icon)`
  fill: currentColor;
`;

const OutlineHelper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  border-bottom: 1px solid black;
  align-items: center;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }

  & > input {
    margin-left: var(--gap);
    border: none;
    font-size: var(--fontSize);
    font-weight: bold;
    color: currentColor;
  }
  
  & > input::placeholder {
    font-weight: normal;
    color: ${COLORS.gray500};
  }

  & > input:focus {
    outline: none;
  }

  & > input:focus + ${OutlineHelper} {
    outline: auto;
    outline-offset: 2px;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper style={sizeStyles[size]}>
      <StyledIcon size={size === 'large' ? 16 : 12} id={icon} />
      <input aria-label={label} placeholder={placeholder} width={width} />
      <OutlineHelper />
    </Wrapper>

  );
};

export default IconInput;
