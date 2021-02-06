import Head from 'next/head';
import Button from '../components/Button';
import { Title, SuperTitle, Paragraph } from '../components/_utils';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';

const ThesisPage = () => {
	return (
		<Layout>
			<Title layoutId='title'>My Thesis</Title>
			<SuperTitle layoutId='supertitle'>Disruption</SuperTitle>
			<motion.p>
				In my thesis I investigated wether or not cryptocurrencies might be a
				Disruptive Innovation. I developed an extensive framework that can
				identify disruptive characteristics and applied it to several
				cryptocurrencies. The results of this thesis let me to starting my
				career in the space.
			</motion.p>

			<Button layoutId='button' text='Get an excerpt'></Button>
		</Layout>
	);
};
export default ThesisPage;
