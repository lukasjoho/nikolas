import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Breakpoint from './_breakpoints';

import Link from 'next/link';
import styled, { ThemeContext } from 'styled-components';
import Socials from './Socials';

const StyledNavbar = styled.nav`
	display: flex;
	height: 20rem;
	align-items: center;
`;
const Ul = styled.ul`
	display: flex;
	list-style-type: none;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	font-weight: 500;

	a {
		text-decoration: none;
		opacity: 0.5;
		color: inherit;
		transition: 0.3s ease;
		&:hover {
			/* opacity: 1; */
			color: ${(props) => props.theme.colors.silver};
			opacity: 1;
		}
		li {
			padding: 0 1rem;
			@media ${Breakpoint.lg} {
				padding: 0 4rem;
			}
		}
	}
	a:last-child {
		li {
			padding-right: 0rem;
		}
	}
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<Socials />
			<Ul>
				<NavItem text='M' link='/' />
				<NavItem text='Ix' link='/coinix' />
				<NavItem text='Th' link='/thesis' />
				<NavItem text='S' link='/stuff' />
			</Ul>
		</StyledNavbar>
	);
};
const NavItem = ({ text, link }) => {
	const router = useRouter();
	const themeContext = useContext(ThemeContext);
	return (
		<Link href={link}>
			<a
				style={
					router.pathname === link
						? {
								color: `${themeContext.colors.silver}`,
								opacity: 1,
						  }
						: null
				}
			>
				<li>{text}</li>
			</a>
		</Link>
	);
};
export default Navbar;
