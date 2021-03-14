import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import Toggle from '../../components/Toggle';
import Link from 'next/link';
import { bookList } from '../../data/bookList';
import { cryptoList } from '../../data/cryptoList';

import Breakpoint from '../../components/_breakpoints';
import toast from 'react-hot-toast';
import IconBook from '../../public/icon-book-closed.svg';
import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';
import Toaster from '../../components/Toaster';

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
		margin-bottom: 3.5rem;
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
			z-index: 999;
			@media ${Breakpoint.lg} {
				position: relative;
				margin-left: 0rem;
			}
		}
	}
	&:hover {
		color: #c7f1fd;
		text-shadow: 0px 0px 2px #c7f1fd;
		span {
			opacity: 1;
			margin-left: -2rem;
			@media ${Breakpoint.lg} {
				margin-left: 1rem;
			}
		}
		p {
			margin-left: 0.5rem;
			@media ${Breakpoint.lg} {
				margin-left: 1rem;
			}
		}
	}
`;
const UlCrypto = styled(motion.ul)`
	list-style-type: none;
	padding-left: 0rem;
	margin-bottom: -4rem;

	/* overflow: scroll; */
	@media ${Breakpoint.lg} {
		position: absolute;
		padding-top: 2rem;
	}
`;
const UlContainer = styled.div`
	@media ${Breakpoint.lg} {
		overflow-x: hidden;
		overflow-y: scroll;
		width: 100%;
		position: relative;
		flex-grow: 1;
		width: calc(100% + 4rem);
		margin-top: -2rem;

		&::-webkit-scrollbar {
			all: unset;

			width: 0.5rem;

			cursor: pointer;
		}
		&::-webkit-scrollbar-track {
			background: rgba(39, 48, 61, 0.5);
			border-radius: 0.25rem;
			cursor: pointer;
		}
		&::-webkit-scrollbar-thumb {
			/* background: #d9ddde; */
			background: rgba(158, 174, 176, 0.5);
			border-radius: 0.25rem;
			cursor: pointer;
			box-shadow: 0px 0px 10px 0px #c7f1fd;
		}
		&::-webkit-scrollbar-thumb:hover {
			background: rgba(158, 174, 176, 1);
		}
	}
`;

const Ul = styled(motion.ul)`
	display: inline-flex;
	list-style-type: none;
	padding-left: 0;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-left: -1rem;
	margin-right: -1rem;
	margin-bottom: -4rem;

	@media ${Breakpoint.md} {
		margin-left: -4rem;
		margin-right: -4rem;

		margin-bottom: -6rem;
	}
	@media ${Breakpoint.lg} {
		position: absolute;
		top: 0;
		left: 0;
		margin-left: -2rem;
		margin-right: -2rem;
		padding-right: 4rem;
		z-index: 999;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
	@media ${Breakpoint.xl} {
		margin-left: -1rem;
		margin-right: -3rem;
	}
	li {
		width: 33%;
		margin-bottom: 4rem;
		opacity: 0.3;
		transition: 0.3s ease;
		@media ${Breakpoint.md} {
			margin-bottom: 6rem;
		}
		@media ${Breakpoint.lg} {
			&:nth-last-child(2),
			&:nth-last-child(1),
			&:nth-last-child(3) {
				margin-bottom: 0;
			}
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
				padding: 0 3rem;
			}
			@media ${Breakpoint.xxl} {
				padding: 0 4rem;
			}
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.3s ease;
			filter: brightness(75%);

			&:hover {
				filter: brightness(100%);
				transform: scale(1.08);
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
		<Link href={`/reading/${book.slug}`}>
			<motion.li variants={bookitem} onClick={() => toast.dismiss()}>
				<div>
					<motion.img layoutId={book.slug} src={book.image} />
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
						crypto.
					</>
				) : (
					<>
						Crypto is arguably one of the fastest growing and most complicated
						technologies we have ever had. Its hard to get a good foothold on
						this thing let alone keep up with it. This is a list of the best
						reading there is on the crypto space. Take some time to read a few
						and you will fall down the rabbit whole to read the rest of them.
					</>
				)
			}
			fixed
			textButton={toggle === 'books' ? 'Pick A Book' : "Let's Talk Crypto"}
			toaster={notify}
			link={
				toggle === 'crypto'
					? 'https://www.linkedin.com/in/nikolas-schoneweg-bb12b8166/'
					: null
			}
			tabTitle='Reading'
		>
			<Toggle toggle={toggle} toggleState={handleState} />
			{toggle === 'books' ? (
				<UlContainer>
					<Ul variants={container} initial='hidden' animate='show'>
						{listBooks}
					</Ul>
				</UlContainer>
			) : (
				<UlContainer>
					<UlCrypto variants={container} initial='hidden' animate='show'>
						{listCrypto}
					</UlCrypto>
				</UlContainer>
			)}

			<Toaster position='top-center' icon={<IconBook />} />
		</Layout>
	);
};
export default ReadingPage;
