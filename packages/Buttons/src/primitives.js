import styled, { css } from "styled-components";
import { colors } from "@ptx/themes";

export const ButtonBase = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 10rem;
  background: transparent;
  color: ${colors.black};
  border: 2px solid ${colors.black};
  text-align: center;
  &:hover {
    cursor: pointer;
  }

  ${props => props.primary && css`
    background: '#676767';
    color: ${colors.white};
    border-color: ${colors.orange};
  `}
`;