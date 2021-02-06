import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const StyledButton = styled(motion.button)`
	padding: 2rem 5rem;
	background-color: transparent;
	border: 1px solid #c7f1fd;
	color: #c7f1fd;
	border-radius: 5px;
	box-shadow: 0px 0px 12px -5px #c7f1fd;
	font-family: inherit;
	font-size: inherit;
`;
const spring = {
	type: 'spring',
	stiffness: 500,
	damping: 30,
};

const Button = ({ text, layoutId }) => {
	return (
		<StyledButton layoutId={layoutId} transition={spring}>
			{text}
		</StyledButton>
	);
};
export default Button;
