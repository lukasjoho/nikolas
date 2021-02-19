import Layout from '../../../components/Layout';
import Toggle from '../../../components/Toggle';
import styled from 'styled-components';

import { cryptoList } from './cryptoList';
import Breakpoint from '../../../components/_breakpoints';
import { motion } from 'framer-motion';

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			cryptos: cryptoList,
		},
	};
};
const ListItem = ({ article }) => {
	return (
		<a href={article.link}>
			<motion.li variants={item}>
				<p>{article.tagline}</p>
				<p>{article.author}</p>
			</motion.li>
		</a>
	);
};
const Ul = styled(motion.ul)`
	list-style-type: none;
	padding-left: 0rem;
	@media ${Breakpoint.md} {
		padding-left: 3rem;
	}
	a {
		color: inherit;
		text-decoration: none;

		li {
			margin-bottom: 4rem;

			p:last-child {
				font-weight: 300;
				font-size: 1.6rem;
			}
		}
	}
`;

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

const CryptoPage = ({ cryptos }) => {
	const list = cryptos.map((article) => <ListItem article={article} />);
	return (
		<Layout
			title='Crypto'
			superTitle='Disruptive'
			text={
				<>
					To me reading is the greatest source of inspiration and knowledge.
					Each book and every paper provides me with a new perspective and I
					seek to evolve from learning about what other people have already
					figured out. Check out my favorite books and the best research on
					crypto
				</>
			}
			textButton="Let's talk crypto"
		>
			<Toggle />
			<Ul variants={container} initial='hidden' animate='show'>
				{list}
			</Ul>
		</Layout>
	);
};
export default CryptoPage;
