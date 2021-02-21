import styled from 'styled-components';
import { motion } from 'framer-motion';

import Layout from '../../../components/Layout';
import Toggle from '../../../components/Toggle';
import Link from 'next/link';
import { bookList } from '../../../data/bookList';
import Breakpoint from '../../../components/_breakpoints';

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			books: bookList,
		},
	};
};
const gap = '1.2rem';
const Ul = styled.ul`
	display: inline-flex;
	list-style-type: none;
	padding-left: 0;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-left: -1rem;

	li {
		width: 33%;
		margin-bottom: 4rem;
		opacity: 0.3;
		transition: 0.3s ease;
		@media ${Breakpoint.md} {
			margin-bottom: 6rem;
		}
		cursor: pointer;
		&:hover {
			opacity: 1;
		}
		div {
			padding: 0 1rem;
			@media ${Breakpoint.md} {
				padding: 0 4rem;
			}
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: flex-start;

			img {
				border-radius: 1rem;
				box-shadow: 0 2rem 3rem -1rem black;
				width: calc(100%);
			}
		}
	}
`;
const item = {
	hidden: { opacity: 0, y: -100 },
	show: { opacity: 1, y: 0 },
};
const ReadingPage = ({ books }) => {
	const list = books.map((book) => (
		<Link href={`books/${book.slug}`}>
			<li>
				<div>
					<motion.img layoutId={book.slug} src={book.image}></motion.img>
				</div>
			</li>
		</Link>
	));

	return (
		<Layout
			title='My Interests'
			superTitle='Reading'
			text={
				<>
					To me reading is the greatest source of inspiration and knowledge.
					Each book and every paper provides me with a new perspective and I
					seek to evolve from learning about what other people have already
					figured out. Check out my favorite books and the best research on
					crypto
				</>
			}
			textButton='Pick A Book'
		>
			<Toggle />
			<Ul>{list}</Ul>
		</Layout>
	);
};
export default ReadingPage;
