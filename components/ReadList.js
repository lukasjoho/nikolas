import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Breakpoint from './_breakpoints';
import { useRouter } from 'next/router';
import Link from 'next/link';

const StyledReadList = styled(motion.div)`
	@media ${Breakpoint.md} {
	}
`;
const Ul = styled.ul`
	display: inline-flex;
	list-style-type: none;
	padding: 0;
	background: #1d2532;
	border-radius: 1.4rem;
	padding: 0.5rem;
	li {
		padding: 1rem 3rem;
		background: #27303d;
		border-radius: 1rem;
	}
`;

const ReadList = () => {
	const router = useRouter();
	return (
		<StyledReadList>
			<Ul>
				<Link href='/reading/books'>
					<li>Books</li>
				</Link>
				<li>Crypto</li>
			</Ul>
		</StyledReadList>
	);
};
export default ReadList;
