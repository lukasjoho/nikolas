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
		flex-direction: column;
		align-items: center;

		@media ${Breakpoint.md} {
			transform: scale(2);
		}
		p {
			font-size: 0.8rem;
			opacity: 0.5;
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
			superTitle='CoinIX Capital'
			text={
				<>
					coinIX is one of Germanies largest and most successful crypto asset
					managers. Our publicly listed stock offers exposure to crypto- and
					blockchain markets and is backed by a carefully selected portfolio of
					cryptocurrencies and seed investments. At coinIX I work on business
					development topics and assess new investment opportunities. During my
					time here, we managed to overcome the aftermaths of a severe hack,
					successfully performed a capital increase and did very successful seed
					investments in projects such as The Graph, 2KEY and Elrond.
				</>
			}
			textButton='Visit CoinIx'
			external='https://coinix.capital/'
			tabTitle='coinIx'
		>
			<Animation>
				<div>
					<iframe
						// src='https://my.spline.design/coinixcopycopycopy-e899aace6f17a233168f0461d4f13bc5/'
						src='animation.html'
						frameborder='0'
						width='100%'
						height='300px'
					></iframe>
					<p>Drag Me!</p>
				</div>
			</Animation>
		</Layout>
	);
};
export default CoinIxPage;
