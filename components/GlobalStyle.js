import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

	html{
		/* @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */
		background: radial-gradient(100.94% 258.4% at 0% 100%, #0B2738 0%, #020817 59.71%);
		height: 100%;
		color: white;

		font-family: Exo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 62.5%;
		*{
			margin: 0;
			padding: 0;
		}
		body{
			font-size: 2rem;
			color: #9EAEB0;
			height: 100%;
		}
		
	}
`;
export default GlobalStyle;
