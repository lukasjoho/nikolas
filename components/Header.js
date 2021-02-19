import React from 'react';
import Breakpoint from './_breakpoints';

import styled from 'styled-components';
import Socials from './Socials';
import Navbar from './navbar';

const StyledHeader = styled.nav`
	display: flex;
	height: 8rem;
	align-items: center;
	justify-content: flex-end;
	> *:last-child {
		display: none;
	}
	@media ${Breakpoint.lg} {
		height: 20rem;
		justify-content: space-between;

		> *:last-child {
			display: flex;
		}
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
