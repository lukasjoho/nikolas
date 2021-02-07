import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from '../components/Button';

import Paragraph from '../components/Paragraph';
import SuperTitle from '../components/SuperTitle';
import Title from '../components/Title';
import Breakpoint from './_breakpoints';

import { Container, Row, Col, OverflowH, Hr } from '../components/_utils';

const Layout = ({
	router,
	title,
	superTitle,
	text,
	layoutId,
	textButton,
	children,
	key,
}) => {
	return (
		<>
			<Container>
				<Navbar />
				<Row>
					<Col>
						<div>
							<Title layoutId='title'>{title}</Title>
							<SuperTitle>{superTitle}</SuperTitle>
							<Hr />
							<OverflowH>
								<Paragraph>{text}</Paragraph>
							</OverflowH>

							<Button layoutId='button' text={textButton} key={key}></Button>
						</div>
					</Col>
					<Col>{children}</Col>
				</Row>

				<Footer />
			</Container>
		</>
	);
};
export default Layout;
