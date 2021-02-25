import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Paragraph from '../components/Paragraph';
import SuperTitle from '../components/SuperTitle';
import Title from '../components/Title';
import { useRouter } from 'next/router';

import { Container, Row, Col, OverflowH, Hr } from '../components/_utils';
import styled from 'styled-components';
import Breakpoint, { size } from '../components/_breakpoints';
import GetWindowDimensions from './GetWindowDimensions';

const BookContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 3rem;
	@media ${Breakpoint.lg} {
		display: none;
	}
	img {
		width: 60%;

		border-radius: 2rem;
		box-shadow: 0 2rem 4rem -1rem black;
		@media ${Breakpoint.md} {
			width: 50%;
		}
	}
`;

const Layout = ({
	title,
	superTitle,
	text,
	textButton,
	children,
	key,
	link,
	external,
	toaster,
	bookImage,
	bookSlug,
	tabTitle,
}) => {
	const router = useRouter();
	const { windowWidth } = GetWindowDimensions();

	return (
		<>
			<Head>
				<title>{tabTitle} - Nikolas</title>
			</Head>
			<Container>
				<Header />
				<Row>
					<Col>
						<div>
							<Title layoutId='title'>{title}</Title>
							<SuperTitle>{superTitle}</SuperTitle>
							<Hr />
							{windowWidth < size.lg && router.pathname == '/reading/[slug]' && (
								<BookContainer>
									<motion.img layoutId={`${bookSlug}`} src={bookImage} alt='' />
								</BookContainer>
							)}

							<OverflowH>
								<Paragraph>{text}</Paragraph>
							</OverflowH>

							<Button
								layoutId='button'
								text={textButton}
								key={key}
								className='desktop'
								link={link}
								external={external}
								toaster={toaster}
							/>
						</div>
					</Col>
					<Col>
						{children}
						<Button
							text={textButton}
							mobile
							link={link}
							external={external}
							toaster={toaster}
						/>
					</Col>
				</Row>

				<Footer />
			</Container>
		</>
	);
};
export default Layout;
