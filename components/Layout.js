import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from '../components/Button';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
	Title,
	SuperTitle,
	Paragraph,
	Container,
	Row,
	Col,
} from '../components/_utils';
const StyledParagraph = styled(Paragraph)`
	margin-bottom: 2rem;
`;
const Layout = ({ pretitle, title, text, textButton, children }) => {
	return (
		<>
			<Container>
				<Navbar />
				{children}

				<Footer />
			</Container>
		</>
	);
};
export default Layout;
