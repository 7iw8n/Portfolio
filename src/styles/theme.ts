import { Theme } from "@emotion/react";

const colors = {
  primary: "#0A0909",
  white: "#FFFFFF",
  black: "#000000",
  green: "#29AE29",
  yellow: "#FFC62A",
  red: "#ED2A2A",
  orange: "#ED7615",
  lavender: "#6E3CF5",
  sussie: "#38E1F1",
  blue: "#0082FF",
};

type Font = {
  family: string;
  size: number;
  style: string;
  weight: number;
  lineheight: string;
};

const FONT = ({ family, size, style, weight, lineheight }: Font): string => `
  font-family: ${family};
  font-size: ${size}rem;
  font-style: ${style};
  font-weight: ${weight};
  line-height: ${lineheight};
  letter-spacing: -0.03rem;
`;

const fonts = {
  displayXL: FONT({
    family: "Labil Grotesk",
    size: 14,
    style: "normal",
    weight: 600,
    lineheight: "normal",
  }),
  displayM: FONT({
    family: "Labil Grotesk",
    size: 8.4,
    style: "normal",
    weight: 600,
    lineheight: "normal",
  }),
  heading1: FONT({
    family: "Labil Grotesk",
    size: 6.4,
    style: "normal",
    weight: 600,
    lineheight: "normal",
  }),
  heading2: FONT({
    family: "Labil Grotesk",
    size: 4.8,
    style: "normal",
    weight: 600,
    lineheight: "normal",
  }),
  heading3: FONT({
    family: "Labil Grotesk",
    size: 3.2,
    style: "normal",
    weight: 600,
    lineheight: "normal",
  }),
  heading4: FONT({
    family: "Labil Grotesk",
    size: 2.4,
    style: "normal",
    weight: 600,
    lineheight: "normal",
  }),
  heading5: FONT({
    family: "Labil Grotesk",
    size: 2,
    style: "normal",
    weight: 600,
    lineheight: "normal",
  }),
  heading6: FONT({
    family: "Labil Grotesk",
    size: 4.8,
    style: "normal",
    weight: 500,
    lineheight: "normal",
  }),
  bodyXL: FONT({
    family: "Labil Grotesk",
    size: 2,
    style: "normal",
    weight: 500,
    lineheight: "normal",
  }),
  bodyL: FONT({
    family: "Labil Grotesk",
    size: 1.8,
    style: "normal",
    weight: 500,
    lineheight: "normal",
  }),
  bodyM: FONT({
    family: "Labil Grotesk",
    size: 1.4,
    style: "normal",
    weight: 500,
    lineheight: "normal",
  }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: Theme = {
  colors,
  fonts,
};
