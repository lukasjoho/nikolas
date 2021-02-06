import Head from 'next/head';
import Button from '../components/Button';
import {
	Title,
	SuperTitle,
	Paragraph,
	Container,
	Row,
	Col,
} from '../components/_utils';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Home = () => {
	const router = useRouter();
	return (
		<Layout>
			<Row>
				<Col>
					<div>
						<Title layoutId='title'>I am Nicolas</Title>
						<SuperTitle layoutId='supertitle'>Discovering</SuperTitle>
						<AnimatePresence>
							<motion.p
								key={router.pathname}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ ease: 'easeOut', duration: 1.5 }}
							>
								Currently exploring the world of cryptocurrencies.
								<br /> Working on the bleeding edge between crypto finance and
								business development
							</motion.p>
						</AnimatePresence>

						<Button layoutId='button' text='Hit Me Up'></Button>
					</div>
				</Col>
				<Col></Col>
			</Row>
		</Layout>
	);
};
export default Home;
