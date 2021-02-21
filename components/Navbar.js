import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Breakpoint from './_breakpoints';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled, { ThemeContext } from 'styled-components';
const Ul = styled.ul`
	display: flex;
	list-style-type: none;
	font-weight: 500;
	width: 100%;
	justify-content: space-around;
	@media ${Breakpoint.lg} {
		width: auto;
		margin-right: -4rem;
		justify-content: unset;
	}
`;

const StyledNavItem = styled.li`
	display: flex;
	justify-content: center;
	position: relative;
	z-index: 1;
	@media ${Breakpoint.lg} {
		width: auto;
	}
	a {
		text-decoration: none;
		opacity: 0.5;
		color: inherit;
		transition: 0.3s ease;
		position: relative;
		@media ${Breakpoint.lg} {
			width: auto;
			padding: 1rem 4rem;
		}
		&:hover {
			color: ${(props) => props.theme.colors.silver};
			opacity: 1;
		}
	}
`;

const Navbar = () => {
	return (
		<Ul>
			<NavItem text='Me' link='/'></NavItem>
			<NavItem text='CoinIx' link='/coinix'></NavItem>
			<NavItem text='Thesis' link='/thesis' />
			<NavItem text='Reading' link='/reading/books' linkAlt='/reading/crypto' />
		</Ul>
	);
};
const NavItem = ({ text, link, linkAlt, children }) => {
	const router = useRouter();
	const themeContext = useContext(ThemeContext);
	return (
		<StyledNavItem>
			<Link href={link}>
				<a
					style={
						router.pathname === link || router.pathname === linkAlt
							? {
									color: `${themeContext.colors.silver}`,
									opacity: 1,
							  }
							: null
					}
				>
					{text}
				</a>
			</Link>
		</StyledNavItem>
	);
};
export default Navbar;
