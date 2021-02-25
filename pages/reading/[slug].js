import Head from 'next/head';
import Layout from '../../components/Layout';
import React from 'react';
import { bookList } from '../../data/bookList';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Breakpoint, { size } from '../../components/_breakpoints';
import GetWindowDimensions from '../../components/GetWindowDimensions';

export const getStaticProps = async ({ params }) => {
	const books = bookList.filter((book) => book.slug === params.slug);
	return {
		props: {
			book: books[0],
		},
	};
};
export const getStaticPaths = async () => {
	const paths = bookList.map((book) => ({
		params: {
			slug: book.slug.toString(),
		},
	}));
	console.log('Paths: ', paths);
	return {
		paths,
		fallback: false,
	};
};
const Container = styled.div`
	height: 100%;
	display: none;
	justify-content: center;
	align-items: center;
	@media ${Breakpoint.lg} {
		display: flex;
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
const Book = ({ book }) => {
	const { windowWidth } = GetWindowDimensions();

	return (
		<Layout
			title={book.tagline}
			superTitle={book.title}
			text={book.text}
			textButton='Back To All'
			link='/reading'
			bookImage={book.image}
			bookSlug={book.slug}
		>
			<Container>
				{windowWidth >= size.lg && (
					<motion.img layoutId={book.slug} src={book.image} alt='' />
				)}
			</Container>
		</Layout>
	);
};

export default Book;
