import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
    --background: #20232A;
    --background-light: #FFFFFF;
    --blue: #ADD9F4;
    --green: 	#55cc44;
    --red: #d63d2e;
    --shape: #3D3E43;
    --text-dark: #20232A;
    --text-light: #FFFFFF;
    --text-gray: #9E9E9E;

    --fontWeightSemiBold: 600;
    --fontWeightMedium: 500;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`;
