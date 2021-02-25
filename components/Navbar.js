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
	height: 80%;
	/* background: rgba(2, 8, 23, 0.2); */
	backdrop-filter: blur(10px);

	@media ${Breakpoint.md} {
		height: 100%;
	}
	@media ${Breakpoint.lg} {
		backdrop-filter: unset;

		background: none;
		height: auto;

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
	flex: 1;
	height: 100%;
	@media ${Breakpoint.lg} {
		width: auto;
	}
	a {
		text-decoration: none;
		opacity: 0.5;
		color: inherit;
		transition: 0.3s ease;
		position: relative;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
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
const Active = styled(motion.div)`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 2px;
	/* border-bottom: 3px solid ${(props) => props.theme.colors.silver}; */
	background: ${(props) => props.theme.colors.silver};
	border-radius: 1px;
	box-shadow: 0px 0px 3px ${(props) => props.theme.colors.silver};
	@media ${Breakpoint.lg} {
		display: none;
	}
`;
const Navbar = () => {
	return (
		<Ul>
			<NavItem text='About' link='/'></NavItem>
			<NavItem text='CoinIX' link='/coinix'></NavItem>
			<NavItem text='Thesis' link='/thesis' />
			<NavItem text='Reading' link='/reading' />
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
			{router.pathname === link || router.pathname === linkAlt ? (
				<Active layoutId='underline' />
			) : null}
		</StyledNavItem>
	);
};
export default Navbar;
