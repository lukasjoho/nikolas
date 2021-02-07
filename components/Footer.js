import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Container } from './_utils';
const StyledFooter = styled.footer`
	height: 80px;
	position: fixed;
	left: 0;
	width: 100%;
	bottom: 0px;
	background: red;
`;
const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Navbar />
			</Container>
		</StyledFooter>
	);
};

export default Footer;
