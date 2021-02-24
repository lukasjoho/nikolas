import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Breakpoint from '../components/_breakpoints';

const Animation = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 6rem;
	margin-bottom: 6rem;
	@media ${Breakpoint.lg} {
		margin-top: unset;
		margin-bottom: unset;
	}
	> div {
		width: 300px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		transform: scale(1.3);
		@media ${Breakpoint.md} {
			transform: scale(2);
		}
		iframe {
			transform: scale(1);
		}
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
			textButton='Visit CoinIx'
			external='https://coinix.capital/'
		>
			<Animation>
				<div>
					<iframe
						src='https://my.spline.design/coinixcopycopy-fb636eee2006a3f5f35949c92371eccb/'
						frameborder='0'
						width='100%'
						height='300px'
					></iframe>
				</div>
			</Animation>
		</Layout>
	);
};
export default CoinIxPage;
