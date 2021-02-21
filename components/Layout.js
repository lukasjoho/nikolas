import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from '../components/Button';
import Highlighter from '../components/Highlighter';

import Paragraph from '../components/Paragraph';
import SuperTitle from '../components/SuperTitle';
import Title from '../components/Title';
import Breakpoint from './_breakpoints';
import { useRouter } from 'next/router';

import { Container, Row, Col, OverflowH, Hr } from '../components/_utils';
import Cursor from './Cursor';

const Layout = ({
	title,
	superTitle,
	text,
	textButton,
	children,
	key,
	link,
}) => {
	const router = useRouter();

	return (
		<>
			<Container>
				<Header />
				<Row>
					<Col>
						<div>
							<Title layoutId='title'>{title}</Title>
							<SuperTitle>{superTitle}</SuperTitle>
							<Hr />
							<OverflowH>
								<Paragraph>{text}</Paragraph>
							</OverflowH>

							<Button
								layoutId='button'
								text={textButton}
								key={key}
								className='desktop'
								link={link}
							/>
							{/* <Highlighter layoutId='highlighter' text={router.pathname} /> */}
						</div>
					</Col>
					<Col>
						{children}
						<Button text={textButton} mobile link={link} />
					</Col>
				</Row>

				<Footer />
			</Container>
		</>
	);
};
export default Layout;
