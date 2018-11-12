import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    color: #ffffff;
  }

  ol{
    padding-left: 20px;
    list-style-type: lower-alpha;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .container{
    width: 800px;
  }
  .greenboard {
    padding: 100px;
    width: 100%;
    .questionText{
      margin: 20px auto;
      font-size: 16px;
    }

    .options input{
      display: none;
    }

    .options label {
      border: 1px solid;
      margin-right: 20px;
      padding: 10px;
      cursor: pointer;
      font-family: monospace;
      &:hover{
        background: #fff;
        color: darkgreen;
      }
    }
  }
  table {
    margin: 100px;
    th, td {
      padding: 5px 10px;
    }
  }
  button{
    color: #ffffff;
    background: rgba(0,158,221, 1);
    border-color: rgba(68,68,68, 0);
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 15px 30px;
  }
  .center{
    text-align: center;
  }
`;

export default GlobalStyle;
