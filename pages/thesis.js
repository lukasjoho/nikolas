import Head from 'next/head';
import Layout from '../components/Layout';
const ThesisPage = () => {
	return (
		<Layout
			title='My Thesis'
			superTitle='Disruption'
			text={
				<>
					Cryptocurrencies as a Disruptive Innovation. A qualitative analysis of
					bitcoin, stable coins and the DeFi movement.
				</>
			}
			textButton='Get an excerpt'
		></Layout>
	);
};
export default ThesisPage;
