import Head from 'next/head';
import Layout from '../../components/Layout';
import React from 'react';
import fs from 'fs';
import { bookList } from './bookList';
const Book = ({ slug }) => {
	return (
		<Layout
			superTitle='Deeply Inspiring '
			text={
				<>
					Reading this book I was just deeply inspired by the drive, conviction
					and willpower one can have if he loves what he does. It is one of my
					most favorite biographies and a powerful inspiration from the greatest
					inventor of our time.
				</>
			}
			textButton='Back To All'
		>
			The slug for this page is: {slug}
		</Layout>
	);
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync('pages/books');
	// const paths = files.map((filename) => ({
	// 	params: {
	// 		slug: filename.replace('.md', ''),
	// 	},
	// }));
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
export const getStaticProps = async ({ params: { slug } }) => {
	return {
		props: {
			slug,
			bookList,
		},
	};
};
export default Book;
