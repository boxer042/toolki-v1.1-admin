import { palette } from './palette';

export const base = {
  primary: '#5c7cfa', // INDIGO5
  hoverPrimary: '#3b5bdb', // INDIGO8
  secondary: '#7048e8', //vlolet7

  gray_Line: '#ddd', // or gray2 palette.gray2,
  gray_Backgoround: palette.gray1,
  gray_Title: '#222222',
  gray_SubTitle: '#717171',
  red_Line: '#f03e3e',
};

export const buttonColorMap: {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
  };
} = {
  primary: {
    background: base.primary,
    color: 'white',
    hoverBackground: base.hoverPrimary,
  },
  white: {
    background: '#fff',
    color: base.gray_Title,
    hoverBackground: base.gray_Backgoround,
  },
  red: {
    background: '#f03e3e',
    color: 'white',
    hoverBackground: '#c92a2a',
  },
};
