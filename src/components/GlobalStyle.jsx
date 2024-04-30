import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css?raw";

export default createGlobalStyle`
  ${normalize}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
    background-color: #fff;
    line-height: 1.4;
  }
  a:linked, a:visited{
    color: #0077cc;
  }
  a:hover, a:focus {
    color: #004499;
  }
  code, pre {
    max-width: 100%;
  }
`;
