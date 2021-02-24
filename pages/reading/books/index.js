import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';
import Toggle from '../../../components/Toggle';
import Link from 'next/link';
import { bookList } from '../../../data/bookList';
import { cryptoList } from '../../../data/cryptoList';

import Breakpoint from '../../../components/_breakpoints';
import toast, { Toaster } from 'react-hot-toast';
import IconBook from '../../../public/icon-book-closed.svg';
import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			books: bookList,
			cryptos: cryptoList,
		},
	};
};
const StyledListItem = styled.a`
	color: inherit;
	text-decoration: none;

	li {
		margin-bottom: 4rem;
		display: flex;
		align-items: center;

		div {
			p {
				transition: 0.3s ease;
			}
			p:last-child {
				font-weight: 300;
				font-size: 1.6rem;
			}
		}
		span {
			position: absolute;
			opacity: 0;
			transition: 0.3s ease;
			margin-left: -2rem;
		}
	}
	&:hover {
		color: #c7f1fd;
		text-shadow: 0px 0px 2px #c7f1fd;
		span {
			opacity: 1;
			margin-left: -2.5rem;
		}
		p {
			margin-left: 0.5rem;
		}
	}
`;
const gap = '1.2rem';
const UlCrypto = styled(motion.ul)`
	list-style-type: none;
	padding-left: 0rem;
	margin-bottom: -4rem;

	@media ${Breakpoint.lg} {
		padding-left: 3rem;
	}
`;
const Ul = styled(motion.ul)`
	display: inline-flex;
	list-style-type: none;
	padding-left: 0;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-left: -1rem;
	margin-bottom: -4rem;
	@media ${Breakpoint.md} {
		margin-left: -4rem;
		margin-bottom: -6rem;
	}
	@media ${Breakpoint.lg} {
		margin-left: -2rem;
	}
	@media ${Breakpoint.xl} {
		margin-left: -1rem;
	}
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
			@media ${Breakpoint.lg} {
				padding: 0 2rem;
			}
			@media ${Breakpoint.xl} {
				padding: 0 4rem;
			}
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.3s ease;
			filter: brightness(80%);

			&:hover {
				filter: brightness(100%);
			}
			img {
				border-radius: 1rem;
				box-shadow: 0 2rem 3rem -1rem black;
				width: calc(100%);
			}
		}
	}
`;
const ListItem = ({ article }) => {
	return (
		<StyledListItem href={article.link} target='_blank'>
			<motion.li variants={item}>
				<span>
					<FaLink />
				</span>
				<div>
					<p>{article.tagline}</p>
					<p>{article.author}</p>
				</div>
			</motion.li>
		</StyledListItem>
	);
};
const BookItem = ({ book }) => {
	return (
		<Link href={`books/${book.slug}`}>
			<motion.li variants={bookitem} onClick={() => toast.dismiss()}>
				<div>
					<motion.img
						layoutId={book.slug}
						src={book.image}
						whileHover={{ scale: 0.9 }}
					/>
				</div>
			</motion.li>
		</Link>
	);
};

const container = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,

		transition: {
			staggerChildren: 0.05,
		},
	},
};
const item = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0 },
};
const bookitem = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0 },
};

const ReadingPage = ({ books, cryptos }) => {
	const notify = () => toast('Pop a book of the shelf!');
	const [toggle, setToggle] = useState('books');
	const handleState = (e) => {
		setToggle(e.target.id);
		console.log(toggle);
	};
	// const listBooks = books.map((book) => (
	// 	<Link href={`books/${book.slug}`}>
	// 		<li onClick={() => toast.dismiss()}>
	// 			<div>
	// 				<motion.img layoutId={book.slug} src={book.image}></motion.img>
	// 			</div>
	// 		</li>
	// 	</Link>
	// ));
	const listBooks = books.map((book) => <BookItem book={book} />);
	const listCrypto = cryptos.map((article) => <ListItem article={article} />);

	return (
		<Layout
			title={toggle === 'books' ? 'I love to read' : 'Disruption'}
			superTitle={toggle === 'books' ? 'Reading' : 'Crypto'}
			text={
				toggle === 'books' ? (
					<>
						To me reading is the greatest source of inspiration and knowledge.
						Each book and every paper provides me with a new perspective and I
						seek to evolve from learning about what other people have already
						figured out. Check out my favorite books and the best research on
						crypto
					</>
				) : (
					<>
						crypto crypto a crypto crypto a crypto crypto a crypto crypto a
						crypto crypto a crypto crypto a crypto crypto a crypto crypto a
						crypto crypto a crypto crypto acrypto crypto a crypto crypto a
						crypto crypto a crypto crypto a crypto crypto a
					</>
				)
			}
			textButton={toggle === 'books' ? 'Pick A Book' : "Let's Talk Crypto"}
			toaster={notify}
			link={
				toggle === 'crypto'
					? 'https://www.linkedin.com/in/nikolas-schoneweg-bb12b8166/'
					: null
			}
		>
			<Toggle toggle={toggle} toggleState={handleState} />
			{toggle === 'books' ? (
				<Ul variants={container} initial='hidden' animate='show'>
					{listBooks}
				</Ul>
			) : (
				<UlCrypto variants={container} initial='hidden' animate='show'>
					{listCrypto}
				</UlCrypto>
			)}
			<Toaster
				position='bottom-center'
				toastOptions={{
					// Define default options
					className: '',
					style: {
						margin: '40px',
						background: 'linear-gradient(259.25deg, #C7F1FD 0%, #DEF8FF 100%)',
						color: '#020817',
						zIndex: 999,
						boxShadow: '0 0 5px 0px #C7F1FD',
					},
					duration: 1500,
					icon: <IconBook />,
					// Default options for specific types
				}}
			/>
		</Layout>
	);
};
export default ReadingPage;
