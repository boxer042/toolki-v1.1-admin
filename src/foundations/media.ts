export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  large: mediaQuery(1200),
  medium: mediaQuery(1024),
  small: mediaQuery(768),
  xsmall: mediaQuery(375),
  custom: mediaQuery,
};

export default media;

// airbnb
// 최소 743
// min-width 744를하면 743까지 744부터 데스트톱(관련속성)
// max-width 743를하면 743까지 모바일(관련속성)
