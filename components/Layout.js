import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from '../components/Button';

import Paragraph from '../components/Paragraph';
import SuperTitle from '../components/SuperTitle';
import Title from '../components/Title';
import { useRouter } from 'next/router';

import { Container, Row, Col, OverflowH, Hr } from '../components/_utils';

const Layout = ({
	title,
	superTitle,
	text,
	textButton,
	children,
	key,
	link,
	external,
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
								external={external}
							/>
						</div>
					</Col>
					<Col>
						{children}
						<Button text={textButton} mobile link={link} external={external} />
					</Col>
				</Row>

				<Footer />
			</Container>
		</>
	);
};
export default Layout;
