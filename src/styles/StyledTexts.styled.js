import styled from "styled-components";
import {colors} from "./colors.js";
import {fontSizes} from "./fonts.js";

export const ScreenTitle = styled.h1`
  font-family: 'Poppins', "Avenir", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: left;
  color: ${colors.black};
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  font-family: "Poppins", "Avenir", "Helvetica", sans-serif;
  font-weight: 550;
  font-size: ${props => isTrue(props.big) ? "22px" : "18px"};
  line-height: 22px;
  text-align: left;
  color: ${props => props.color ?? 'black'};
  box-sizing: border-box;
  height: fit-content;
`;

export const Text = styled.span`
  margin: 0;
  padding: 0;
  font-family: 'Poppins', Avenir, sans-serif;
  line-height: 22px;
  font-weight: normal;
  color: ${props => props.color ?? 'black'};
  font-size: ${props => props.fontSize ?? fontSizes.nm};
  text-align: ${props => props.align ?? "center"};
`;

export const LightText = styled(Text)`
  font-weight: lighter;
`;

export const Label = styled.label`
  font-family: 'Poppins', Avenir, sans-serif;
  user-select: none;
  font-size: ${fontSizes.sm};
  color: ${colors["dark-gray"]};
`;
