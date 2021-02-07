import Head from 'next/head';
import Layout from '../components/Layout';
const ThesisPage = () => {
	return (
		<Layout
			title='Cryptocurrency Fund'
			superTitle='coinIX Capital'
			text={
				<>
					coinIX is one of Germanies largest and most successful crypto asset
					managers. Our publicly listed stock offers exposure to crypto- and
					blockchain markets and is backed by a carefully selected portfolio of
					cryptocurrencies and seed investments.
				</>
			}
			textButton="Let's talk crypto"
		></Layout>
	);
};
export default ThesisPage;
