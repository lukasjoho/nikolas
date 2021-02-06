import styled from 'styled-components';
import Breakpoint from './_breakpoints';
import React from 'react';
import { motion } from 'framer-motion';

export const Container = styled.div`
	max-width: 100%;
	margin: auto;
	padding: 0 4rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	@media ${Breakpoint.md} {
	}
	@media ${Breakpoint.xxl} {
		max-width: 1400px;
	}
`;
export const Row = styled.div`
	display: flex;
	flex-grow: 1;
	margin-left: -4rem;
	margin-right: -4rem;
`;
export const Col = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	padding: 0 4rem;
`;
export const Title = styled(motion.h1)`
	font-size: 2.2rem;
	color: #ff8563;
	font-weight: 300;

	@media ${Breakpoint.md} {
		font-size: 2.2rem;
	}
`;
export const SuperTitle = styled(motion.h1)`
	background-image: linear-gradient(180deg, #7c8284 0%, #d9ddde 50%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 9rem;
`;
export const Paragraph = styled.p`
	line-height: 2;
`;
