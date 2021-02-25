import styled from 'styled-components';
import Breakpoint from './_breakpoints';
import React from 'react';
import { motion } from 'framer-motion';

export const Container = styled.div`
	max-width: 100%;
	height: 100%;
	margin: auto;
	padding: 0 4rem;
	display: flex;
	flex-direction: column;
	padding-top: 8rem;
	margin-top: 3rem;
	@media ${Breakpoint.md} {
		margin-top: 6rem;
	}
	@media ${Breakpoint.lg} {
		padding-top: 0rem;
		margin-top: 0rem;
		max-width: 1100px;
	}
	@media ${Breakpoint.xl} {
		max-width: 1200px;
	}
	@media ${Breakpoint.xxl} {
		max-width: 1400px;
	}
`;
export const Row = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-right: -4rem;
	margin-left: -4rem;
	height: 100%;
	@media ${Breakpoint.lg} {
		flex-direction: row;
		align-items: stretch;
	}
	> div:first-child {
	}
`;
export const Col = styled.div`
	flex-grow: 1;
	padding: 0 4rem;
	@media ${Breakpoint.lg} {
		width: 50%;
	}
`;

export const Paragraph = styled.p`
	line-height: 2;
`;
export const OverflowH = styled.div`
	overflow: hidden;
`;
export const Hr = styled.hr`
	background: linear-gradient(to right, transparent, #7c8284, transparent);
	filter: drop-shadow(0px 0px 2px #7c8284);
	height: 1px;
	border: none;
	transform: translateX(-50%);
	margin: 2rem 0 3rem;
`;
