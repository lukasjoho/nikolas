import Head from 'next/head';
import CircleAnimation from '../components/CircleAnimation';
import Layout from '../components/Layout';
import Button from '../components/Button';
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
			textButton='Get To Know Me'
			external='https://www.linkedin.com/in/nikolas-schoneweg-bb12b8166/'
		>
			<CircleAnimation />
		</Layout>
	);
};
export default Home;
