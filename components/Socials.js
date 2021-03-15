import React from 'react';

import styled from 'styled-components';
import Breakpoint from './_breakpoints';

import { FaLinkedin, FaMedium } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

const Ul = styled.ul`
	display: flex;
	list-style-type: none;
	align-items: center;
	> * {
		padding: 0 1rem;
		opacity: 0.5;
		transition: 0.3s ease;
		font-size: 2.2rem;

		&:first-child {
			padding-left: 0;
		}
		&:last-child {
			padding-right: 0rem;

			@media ${Breakpoint.lg} {
				padding: 0 1rem;
			}
		}
		&:hover {
			color: ${(props) => props.theme.colors.silver};
			opacity: 1;
		}
	}
	a {
		text-decoration: none;
		color: inherit;
	}
`;

const Socials = () => {
	return (
		<Ul>
			<ListItem icon={<FaMedium />} link='https://medium.com/@nik0411' />
			<ListItem
				icon={<FaLinkedin />}
				link='https://www.linkedin.com/in/nikolas-schoneweg-bb12b8166/'
			/>
			<ListItem icon={<FiShare />} />
		</Ul>
	);
};
const ListItem = ({ link, icon }) => {
	return (
		<>
			{link ? (
				<a href={link} target='_blank'>
					<li>{icon}</li>
				</a>
			) : (
				<li>{icon}</li>
			)}
		</>
	);
};
export default Socials;
