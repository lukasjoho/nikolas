import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Breakpoint from './_breakpoints';

const StyledFooter = styled.footer`
	height: 80px;
	position: fixed;
	left: 0;
	width: 100%;
	bottom: 0px;
	display: flex;
	align-items: center;
	backdrop-filter: blur(10px);
	@media ${Breakpoint.lg} {
		display: none;
	}
`;
const Footer = () => {
	return (
		<StyledFooter>
			<Navbar />
		</StyledFooter>
	);
};

export default Footer;
