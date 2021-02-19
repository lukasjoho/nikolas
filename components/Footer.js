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
	background: rgba(2, 8, 23, 0.6);
	backdrop-filter: blur(10px);
	z-index: 999;
	box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.6);
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
