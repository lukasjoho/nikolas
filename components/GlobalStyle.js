import { createGlobalStyle } from 'styled-components';
import Breakpoint from './_breakpoints';

const GlobalStyle = createGlobalStyle`

	html{
		/* @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */
		/* background: radial-gradient(100.94% 258.4% at 0% 100%, #0B2738 0%, #020817 59.71%); */
		color: white;
		
		font-family: Exo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 62.5%;
		min-height: 100%;
		*{
			margin: 0;
			padding: 0;
		}
		
		background: radial-gradient(100.94% 258.4% at 0% 100%, #0B2738 0%, #020817 59.71%);

	
			overflow-x: hidden;


		body{
			/* padding-bottom: 8rem; */
			font-size: 1.6rem;
			color: #9EAEB0;	
			overflow-x: hidden;
			@media ${Breakpoint.md} {
			overflow-x: unset;

					font-size: 2rem;
			}

			
		}

		
	}
	@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-Thin.ttf");
			font-style: normal;
			font-weight: 100;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-ThinItalic.ttf");
			font-style: italic;
			font-weight: 100;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-ExtraLight.ttf");
			font-style: normal;
			font-weight: 200;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-ExtraLightItalic.ttf");
			font-style: italic;
			font-weight: 200;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-Light.ttf");
			font-style: normal;
			font-weight: 300;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-LightItalic.ttf");
			font-style: italic;
			font-weight: 300;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-Regular.ttf");
			font-style: normal;
			font-weight: 400;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-RegularItalic.ttf");
			font-style: italic;
			font-weight: 400;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-Medium.ttf");
			font-style: normal;
			font-weight: 500;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-MediumItalic.ttf");
			font-style: italic;
			font-weight: 500;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-Semibold.ttf");
			font-style: normal;
			font-weight: 600;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-SemiboldItalic.ttf");
			font-style: italic;
			font-weight: 600;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-Bold.ttf");
			font-style: normal;
			font-weight: 700;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-BoldItalic.ttf");
			font-style: italic;
			font-weight: 700;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-ExtraBold.ttf");
			font-style: normal;
			font-weight: 800;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-ExtraBoldItalic.ttf");
			font-style: italic;
			font-weight: 800;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-Black.ttf");
			font-style: normal;
			font-weight: 900;
			font-display: swap;
		}
		@font-face {
			font-family: "Exo";
			src: url("/fonts/Exo/Exo-BlackItalic.ttf");
			font-style: italic;
			font-weight: 900;
			font-display: swap;
		}
`;
export default GlobalStyle;
