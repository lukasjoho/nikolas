import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Breakpoint from './_breakpoints';

const StyledParagraph = styled(motion.p)`
	line-height: 2.2;
	margin-bottom: 4rem;
	font-weight: 300;
	max-height: 300px;
	overflow: scroll;
	@media ${Breakpoint.md} {
		margin-bottom: 6rem;
	}
`;

const Paragraph = ({ children, location, router }) => {
	return (
		<StyledParagraph
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeOut', duration: 1 }}
		>
			{children}
		</StyledParagraph>
	);
};
export default Paragraph;
