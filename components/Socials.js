import React, { useContext } from 'react';

import Link from 'next/link';
import styled, { ThemeContext } from 'styled-components';

import { FaLinkedin, FaMedium } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';

const Ul = styled.ul`
	display: flex;
	list-style-type: none;
	align-items: center;
	a {
		text-decoration: none;
		color: inherit;
		opacity: 0.5;
		transition: 0.3s ease;
		font-size: 2.2rem;
		padding: 0 1rem;
		&:first-child {
			padding-left: 0;
		}
		&:hover {
			color: ${(props) => props.theme.colors.silver};
			opacity: 1;
		}
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
			<ListItem icon={<IoDocumentText />} link='https://medium.com/' />
		</Ul>
	);
};
const ListItem = ({ link, icon }) => {
	return (
		<a href={link} target='_blank'>
			<li>{icon}</li>
		</a>
	);
};
export default Socials;
