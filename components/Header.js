import React from 'react';
import Breakpoint from './_breakpoints';

import styled from 'styled-components';
import Socials from './Socials';
import Navbar from './Navbar';
//changed Navbar capitalized
const StyledHeader = styled.nav`
	display: flex;
	height: 8rem;
	align-items: flex-start;
	justify-content: flex-end;
	position: fixed;
	left: 0;
	width: 100%;
	top: 0;
	z-index: 999;

	> *:first-child {
		display: none;
	}

	@media ${Breakpoint.lg} {
		align-items: center;
		height: 12rem;

		position: relative;
		left: unset;
		width: unset;
		justify-content: space-between;
		margin-bottom: 3rem;
		> *:first-child {
			display: flex;
		}
	}
	@media ${Breakpoint.xl} {
		height: 16rem;
		margin-bottom: 3rem;
	}
	@media ${Breakpoint.xxl} {
		height: 22rem;
		margin-bottom: 3rem;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Socials />
			<Navbar />
		</StyledHeader>
	);
};
export default Header;
