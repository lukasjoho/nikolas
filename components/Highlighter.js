import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledHighlighter = styled(motion.div)`
	position: absolute;
	height: 100%;
	width: 100%;
	background: red;
	left: 0;
	top: 0;
	z-index: -1;
	opacity: 1 !important;
`;
const spring = {
	type: 'spring',
	stiffness: 500,
	damping: 30,
};

const Highlighter = ({ text, layoutId, key }) => {
	return <StyledHighlighter key={key} layoutId={layoutId}></StyledHighlighter>;
};
export default Highlighter;
