import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Breakpoint from './_breakpoints';

const StyledSuperTitle = styled(motion.h1)`
	background-image: linear-gradient(180deg, #7c8284 0%, #d9ddde 50%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 4.5rem;
	line-height: 1;
	padding-bottom: 1rem;
	@media ${Breakpoint.lg} {
		font-size: 9rem;
	}
`;

const SuperTitle = ({ children }) => {
	return (
		<StyledSuperTitle
			// initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeOut', duration: 0.9, delay: 0.1 }}
		>
			{children}
		</StyledSuperTitle>
	);
};
export default SuperTitle;
