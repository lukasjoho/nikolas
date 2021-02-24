import styled from 'styled-components';
import { motion } from 'framer-motion';
import Breakpoint from './_breakpoints';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
const UlContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	@media ${Breakpoint.lg} {
		justify-content: flex-start;
	}
`;
const Ul = styled.ul`
	display: inline-flex;
	list-style-type: none;
	margin-bottom: 4rem;
	margin-top: 5rem;
	/* margin-left: -3rem; */
	position: relative;
	border-radius: 10px;

	@media ${Breakpoint.lg} {
		margin-left: 3rem;
		margin-top: 0rem;
	}
	width: 20rem;

	li {
		padding: 1rem 0rem;
		position: relative;
		cursor: pointer;
		flex: 1 1 0px;
		width: 50%;
		text-align: center;
		@media ${Breakpoint.lg} {
			padding: 1rem 0rem;
		}
	}
`;
const Active = styled(motion.div)`
	position: absolute;
	z-index: -1;
	width: 50%;
	height: 100%;
	background: red;
	top: 0;
	left: 0%;
	background: #27303d;
	border-radius: 1rem;
	transition: 0.3s ease;
	margin-left: ${(props) => (props.toggle === 'books' ? '0%' : '50%')};
`;

const SuperLink = ({ text, toggleState, id }) => {
	return (
		<li id={id} onClick={(e) => toggleState(e)}>
			{text}
		</li>
	);
};

const Toggle = ({ toggle, toggleState }) => {
	return (
		<UlContainer>
			<Ul id='toggler'>
				<Active toggle={toggle} />
				<SuperLink id='books' text='Books' toggleState={toggleState} />
				<SuperLink id='crypto' text='Crypto' toggleState={toggleState} />
			</Ul>
		</UlContainer>
	);
};
export default Toggle;
