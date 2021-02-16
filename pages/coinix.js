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
					cryptocurrencies and seed investments. <br />
					At coinIX I work on business development topics and assess new
					investment opportunities. During my time here, we managed to overcome
					the aftermaths of a sever hack, successfully performed a capital
					increase and did very successful seed investments in projects such as
					The Graph, 2KEY and Elrond. <br />
					Feel free to contact for my opinion or me on crypto as an investment
					opportunity
				</>
			}
			textButton="Let's talk crypto"
		></Layout>
	);
};
export default ThesisPage;
