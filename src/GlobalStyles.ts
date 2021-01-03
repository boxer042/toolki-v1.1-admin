import { createGlobalStyle } from 'styled-components';
import { font } from './foundations/font';

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  color: ${font.baseFontColor};
  font-size: 1rem;

}

* {
  box-sizing: inherit;
  text-decoration: none;
}
*:focus { outline:none; }
code {
  font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
input, button, textarea {
  font-family: inherit;
}
html, body, #root {
  height: 100%;
}
h1, h2, h3 {
  color: ${font.baseFontColor};
}
`;

export default GlobalStyles;
