import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const StyledParagraph = styled(motion.p)`
	line-height: 2.2;
	margin-bottom: 6rem;
	font-weight: 300;
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
