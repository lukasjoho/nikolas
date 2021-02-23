import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Socials from './Socials';
import Breakpoint from './_breakpoints';

const StyledFooter = styled.footer`
	height: 80px;
	position: relative;
	left: 0;
	width: 100%;
	bottom: 0px;
	display: flex;
	align-items: center;
	z-index: 999;
	justify-content: center;
	border-top: 1px solid #9eaeb020;
	@media ${Breakpoint.lg} {
		display: none;
	}
`;
const Footer = () => {
	return (
		<StyledFooter>
			{/* <Navbar /> */}
			<Socials />
		</StyledFooter>
	);
};

export default Footer;
