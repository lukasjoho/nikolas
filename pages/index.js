import Head from 'next/head';
import Layout from '../components/Layout';
const Home = () => {
	return (
		<Layout
			title='I am Nicolas'
			superTitle='Discovering'
			text={
				<>
					Currently exploring the world of cryptocurrencies.
					<br /> Working on the bleeding edge between crypto finance and
					business development Currently exploring the world of
				</>
			}
			textButton='Hit Me Up'
		>
			asd
		</Layout>
	);
};
export default Home;
