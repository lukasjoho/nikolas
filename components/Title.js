import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Breakpoint from './_breakpoints';

const StyledTitle = styled(motion.h1)`
	font-size: 2rem;
	color: #ff8563;
	font-weight: 100;
	margin-bottom: 1.2rem;

	@media ${Breakpoint.md} {
		font-size: 2.2rem;
	}
	@media ${Breakpoint.md} {
		font-size: 2.5rem;
	}
`;

const Title = ({ children }) => {
	return (
		<StyledTitle
			// initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeOut', duration: 0.8 }}
		>
			{children}
		</StyledTitle>
	);
};
export default Title;
