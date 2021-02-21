import Head from 'next/head';
import Layout from '../../../components/Layout';
import React from 'react';
import { bookList } from './bookList';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Breakpoint from '../../../components/_breakpoints';

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
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 70%;

		border-radius: 2rem;
		box-shadow: 0 2rem 4rem -1rem black;
		@media ${Breakpoint.md} {
			width: 50%;
		}
	}
`;
const Book = ({ book }) => {
	return (
		<Layout
			title={book.tagline}
			superTitle={book.title}
			text={book.text}
			textButton='Back To All'
			link='/reading/books'
		>
			<Container>
				<motion.img layoutId={book.slug} src={book.image} alt='' />
			</Container>
		</Layout>
	);
};

export default Book;
