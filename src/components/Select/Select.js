import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
`;

const InlineIcon = styled(Icon)`
  display: inline-block;
  fill: currentColor;
`;
  
const SelectComp = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Presentation = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 12px 16px;
  line-height: 18.75px;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};

  ${SelectComp}:focus + & {
    outline: auto;
  }

  ${SelectComp}:hover + & {
    color: ${COLORS.black};
  }
`;

const Value = styled.span`
  display: inline-block;
  color: currentColor;
  margin-right: 16px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectComp
        value={value}
        onChange={onChange}
        aria-label={label}
      >
        {children}
      </SelectComp>
      <Presentation>
        <Value>{displayedValue}</Value>
        <InlineIcon id="chevron-down" size={16} />
      </Presentation>
    </Wrapper>
  );
};

export default Select;
