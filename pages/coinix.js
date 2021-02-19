import Layout from '../components/Layout';
import styled from 'styled-components';

const Animation = styled.div`
	iframe {
		transform: scale(0.5);
	}
`;
const CoinIxPage = () => {
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
		>
			<Animation>
				<iframe
					src='https://my.spline.design/coinix-bf32fc4f5e08a32fcadab4d2f334188e/'
					frameborder='0'
					width='300px'
					height='300px'
				></iframe>
			</Animation>
		</Layout>
	);
};
export default CoinIxPage;
