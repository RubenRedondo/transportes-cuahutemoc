import styled from "styled-components";
import {colors} from "../../../styles/colors.js";
import {fontSizes} from "../../../styles/fonts.js";

const Group = styled.div`
  position: relative;
  width: 100%;
  height: 73px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto auto;
  padding: 16px;
  gap: 5px;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({error}) => error ? colors["error"] : colors["medium-gray"]};
  transition: all 0.3s ease;

  &:focus-within {
    border-color: ${colors["black-navy"]};
  }

  ${".input"} {
    appearance: none;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: transparent;
    font-size: ${fontSizes.nm};
    outline: none;
    border: none;
    color: ${({error}) => error ? colors["error"] : colors["black"]};

    &::placeholder {
      opacity: 0.7;
      color: ${colors["medium-gray"]};
    }
  }

  ${".label"} {
    position: relative;
    box-sizing: border-box;
    top: 0;
    left: 0;
    transform-origin: left;
    color: ${colors.mainColor};
    user-select: none;
    font-size: ${fontSizes.sm};
  }

  ${".span"} {
    margin-top: 5px;
    color: ${colors.error};
    font-size: ${fontSizes.sm};
    user-select: none;
  }


`;

const StyledButton = styled.button`
  grid-row: 2;
  position: absolute;
  background-color: transparent;
  outline: none;
  appearance: none;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 0 10px;
  .icon {
    transition: opacity 0.3s ease;
    opacity: ${props => (props.active === 'true' ? 0.5 : 1)};
  }

`;


export {Group, StyledButton};
