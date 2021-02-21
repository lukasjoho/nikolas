import Layout from '../../../components/Layout';
import Toggle from '../../../components/Toggle';
import styled from 'styled-components';

import { cryptoList } from '../../../data/cryptoList';
import Breakpoint from '../../../components/_breakpoints';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';

export const getStaticProps = async ({ params }) => {
	return {
		props: {
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
const Ul = styled(motion.ul)`
	list-style-type: none;
	padding-left: 0rem;
	@media ${Breakpoint.md} {
		padding-left: 3rem;
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
			external='https://www.linkedin.com/in/nikolas-schoneweg-bb12b8166/'
		>
			<Toggle />

			<Ul variants={container} initial='hidden' animate='show'>
				{list}
			</Ul>
		</Layout>
	);
};
export default CryptoPage;
