import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import styled from 'styled-components';
import IconMedium from '../public/icon-medium.svg';
import IconLinkedin from '../public/icon-linkedin.svg';

const StyledNavbar = styled.nav`
	display: flex;
`;
const Ul = styled.ul`
	display: flex;
	height: 80px;
	list-style-type: none;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	a {
		text-decoration: none;
		color: inherit;
	}
	li {
		margin-left: 6rem;
	}
`;
const Navbar = () => {
	return (
		<StyledNavbar>
			<Ul>
				<li>
					<IconLinkedin />
				</li>
			</Ul>
			<Ul>
				<NavItem text='Me' link='/' />
				<NavItem text='CoinIx' link='/coinix' />
				<NavItem text='Thesis' link='/thesis' />
				<NavItem text='Stuff' link='/stuff' />
			</Ul>
		</StyledNavbar>
	);
};
const NavItem = ({ text, link }) => {
	const router = useRouter();

	return (
		<Link href={link}>
			<a
				style={
					router.pathname === link ? { color: 'white' } : { color: 'inherit' }
				}
			>
				<li>{text}</li>
			</a>
		</Link>
	);
};
export default Navbar;
