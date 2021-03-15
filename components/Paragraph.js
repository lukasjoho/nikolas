import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Breakpoint from './_breakpoints';

const StyledParagraph = styled(motion.p)`
	line-height: 2;
	font-weight: 300;
	overflow: scroll;
	text-align: justify;
	/* overflow: -moz-scrollbars-vertical;
	overflow-y: scroll; */
	overflow-x: hidden;
	overflow-y: auto;
	&.fixed {
		height: auto;
	}
	&::-webkit-scrollbar {
		display: none;
	}
	@media ${Breakpoint.md} {
	}
	@media ${Breakpoint.lg} {
		line-height: 2;
		&.fixed {
			height: auto;
		}

		&::-webkit-scrollbar {
			all: unset;

			width: 0.5rem;
			cursor: pointer;
		}
		&::-webkit-scrollbar-track {
			background: rgba(39, 48, 61, 0.5);
			border-radius: 0.25rem;
			cursor: pointer;
		}
		&::-webkit-scrollbar-thumb {
			/* background: #d9ddde; */
			background: rgba(158, 174, 176, 0.5);
			border-radius: 0.25rem;
			cursor: pointer;
			box-shadow: 0px 0px 10px 0px #c7f1fd;
		}
		&::-webkit-scrollbar-thumb:hover {
			background: rgba(158, 174, 176, 1);
		}
		margin-bottom: 4rem;
		/* padding-right: 8rem; */
		padding-right: 4rem;
		margin-right: 4rem;
		max-height: 18rem;
	}
	@media ${Breakpoint.xxl} {
		max-height: 20rem;
	}
`;

const Paragraph = ({ children, location, router, fixed }) => {
	return (
		<StyledParagraph
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeOut', duration: 1 }}
			className={fixed ? 'fixed' : null}
		>
			{children}
		</StyledParagraph>
	);
};
export default Paragraph;
