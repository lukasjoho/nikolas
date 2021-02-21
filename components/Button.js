import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Breakpoint from './_breakpoints';
import Link from 'next/link';

const StyledButton = styled(motion.button)`
	padding: 2rem 5rem;
	background-color: transparent;
	border: 1px solid #c7f1fd;
	color: #c7f1fd;
	border-radius: 5px;
	box-shadow: 0px 0px 12px -5px #c7f1fd;
	font-family: inherit;
	font-size: inherit;
	cursor: pointer;
	position: relative;
	z-index: 99;
	&:focus {
		outline: 0;
	}
	&.desktop {
		display: none;
		@media ${Breakpoint.lg} {
			display: inline-block;
		}
	}
	&.full {
		margin-top: 6rem;
		margin-bottom: 6rem;
		width: 100%;
		@media ${Breakpoint.lg} {
			display: none;
		}
	}
`;
const spring = {
	type: 'spring',
	stiffness: 500,
	damping: 30,
};

const Button = ({ text, layoutId, key, mobile, link }) => {
	return (
		<>
			{link ? (
				<Link href={link}>
					<a>
						<StyledButton
							key={key}
							layoutId={layoutId}
							className={mobile ? 'full' : 'desktop'}
						>
							{text}
						</StyledButton>
					</a>
				</Link>
			) : (
				<StyledButton
					key={key}
					layoutId={layoutId}
					className={mobile ? 'full' : 'desktop'}
				>
					{text}
				</StyledButton>
			)}
		</>
	);
};
export default Button;
