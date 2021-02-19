import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Breakpoint from './_breakpoints';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Ul = styled.ul`
	display: inline-flex;
	list-style-type: none;
	padding: 0;
	margin-bottom: 6rem;
	/* margin-left: -3rem; */
	li {
		padding: 1rem 3rem;
		position: relative;
	}
`;
const Active = styled(motion.div)`
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;
	background: red;
	top: 0;
	left: 0;
	background: #27303d;
	border-radius: 1rem;
`;
const SuperLink = ({ path, text }) => {
	const router = useRouter();
	console.log(router.route);
	return (
		<Link href={path}>
			<li>
				{text}
				{router.route === path && <Active layoutId='active' />}
			</li>
		</Link>
	);
};

const Toggle = () => {
	return (
		<Ul>
			<SuperLink path='/reading/books' text='Books' />
			<SuperLink path='/reading/crypto' text='Crypto' />
		</Ul>
	);
};
export default Toggle;
