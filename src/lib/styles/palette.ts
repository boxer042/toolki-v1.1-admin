export const palette = {
  INDIGO4: '#9775fa',
  baseBackground: '#fff',
  baseLine: '#e9ecef', // gray2
  baseFontColor: '#495057', // gray7
  subFontColor: '#868e96', // gray6
  baseBackgroundHover: '#e9ecef',
  baseFontHoverAndActive: '#fa5252', //RED6
  baseLogoColor: '#fa5252',

  tableBackgroundHover: '#edf2ff', // INDIGO
};

export const buttonColorMap: {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
  };
} = {
  red: {
    background: palette.baseFontHoverAndActive,
    color: 'white',
    hoverBackground: '#ff6b6b',
  },
  gray: {
    background: '#868e96',
    color: 'white',
    hoverBackground: '#adb5bd',
  },
};
