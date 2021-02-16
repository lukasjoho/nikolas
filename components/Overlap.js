import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const StyledCard = styled(motion.div)`
	width: 50%;
`;

const Overlap = () => {
	return <StyledCard>I am an element.</StyledCard>;
};
export default Overlap;
