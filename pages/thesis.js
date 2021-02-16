import Head from 'next/head';
import Layout from '../components/Layout';
import Overlap from '../components/Overlap';
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
		>
			<Overlap />
		</Layout>
	);
};
export default ThesisPage;
