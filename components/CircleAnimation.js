import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Breakpoint from './_breakpoints';

const Wrapper = styled.div`
	margin-top: 6rem;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
	@media ${Breakpoint.lg} {
		overflow-x: unset;

		margin-top: 0rem;
		font-size: 2rem;
	}
`;
const CircleWrapper = styled.div`
	width: 120%;
	padding-top: 120%;
	position: absolute;
	top: -20%;
	@media ${Breakpoint.s} {
		top: -10%;

		width: 110%;
		padding-top: 110%;
	}

	@media ${Breakpoint.lg} {
		top: -10%;

		width: 100%;
		padding-top: 100%;
	}
	@media ${Breakpoint.xl} {
		top: 0%;

		width: 100%;
		padding-top: 100%;
	}
	@media ${Breakpoint.xl} {
		top: -20%;
	}
`;
const CircleContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	display: inline-flex;
	width: ${(props) => `100%`};

	height: ${(props) => `100%`};
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	z-index: 1;
	overflow: hidden;
`;
const StyledCircle = styled.div`
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	position: absolute;
	opacity: ${(props) => props.opacity};
	width: ${(props) => `calc(${props.size}% - ${props.icon}px)`};
	height: ${(props) => `calc(${props.size}% - ${props.icon}px)`};
	border: 1px solid rgba(200, 200, 200, 1);
	border-radius: 50%;
	transform: rotate(0deg);
	animation: rotation ${(props) => `${props.duration}s`} linear
		${(props) => `${-1 * props.delay}s`} infinite reverse;
	div {
		position: absolute;
		width: ${(props) => `${props.icon / 1.5}px`};
		height: ${(props) => `${props.icon / 1.5}px`};
		transform: rotate(0deg);

		animation: rotation ${(props) => `${props.duration}s`} linear
			${(props) => `${-1 * props.delay}s`} infinite;
		border-radius: 5px;
		overflow: hidden;
		@media ${Breakpoint.lg} {
			width: ${(props) => `${props.icon}px`};
			height: ${(props) => `${props.icon}px`};
		}
		img {
			width: 100%;
		}
		&:nth-child(1) {
			top: ${(props) => `calc(50% - ${props.icon / 1.5 / 2}px)`};
			left: ${(props) => `calc(0% - ${props.icon / 1.5 / 2}px)`};
		}
		&:nth-child(2) {
			bottom: ${(props) => `calc(0% - ${props.icon / 1.5 / 2}px)`};
			left: ${(props) => `calc(50% - ${props.icon / 1.5 / 2}px)`};
		}
		&:nth-child(3) {
			top: ${(props) => `calc(50% - ${props.icon / 1.5 / 2}px)`};
			right: ${(props) => `calc(0% - ${props.icon / 1.5 / 2}px)`};
		}
		&:nth-child(4) {
			top: ${(props) => `calc(0% - ${props.icon / 1.5 / 2}px)`};
			left: ${(props) => `calc(50% - ${props.icon / 1.5 / 2}px)`};
		}
		@media ${Breakpoint.lg} {
			&:nth-child(1) {
				top: ${(props) => `calc(50% - ${props.icon / 2}px)`};
				left: ${(props) => `calc(0% - ${props.icon / 2}px)`};
			}
			&:nth-child(2) {
				bottom: ${(props) => `calc(0% - ${props.icon / 2}px)`};
				left: ${(props) => `calc(50% - ${props.icon / 2}px)`};
			}
			&:nth-child(3) {
				top: ${(props) => `calc(50% - ${props.icon / 2}px)`};
				right: ${(props) => `calc(0% - ${props.icon / 2}px)`};
			}
			&:nth-child(4) {
				top: ${(props) => `calc(0% - ${props.icon / 2}px)`};
				left: ${(props) => `calc(50% - ${props.icon / 2}px)`};
			}
		}
	}
`;

const StyledImage = styled(motion.div)`
	width: 100%;
	font-size: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 2;
	img {
		position: relative;
		width: 100%;
		bottom: 0px;
		margin: auto;
		filter: brightness(85%);
	}
`;
const NoOverflow = styled.div`
	overflow: hidden;
`;
const Line = styled.div`
	position: absolute;
	height: 300px;
	width: 150%;
	bottom: -300px;
	z-index: 3;
	backdrop-filter: blur(10px);
	.hr {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 75%;
		background: linear-gradient(
			to right,
			transparent 0%,
			#c7f1fd 40%,
			#c7f1fd 60%,
			transparent 100%
		);
		height: 1px;
	}
	.shadow {
		height: 100px;
		width: 75%;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: -100px;
		box-shadow: 0px 50px 40px -40px #c7f1fd75;
	}
`;
const CircleAnimation = () => {
	return (
		<Wrapper>
			<CircleWrapper>
				<CircleContainer>
					<StyledCircle
						size={100}
						icon={40}
						opacity={0.3}
						duration={40}
						delay={6}
					>
						<div>
							<img src='icon-medium-circle.svg' alt='' />
						</div>
						<div>
							<img src='icon-wwu.svg' alt='' />
						</div>

						<div>
							<img src='icon-polkadot.svg' alt='' />
						</div>

						<div>
							<img src='icon-ethereum.svg' alt='' />
						</div>
					</StyledCircle>
					<StyledCircle
						size={70}
						icon={50}
						opacity={0.4}
						duration={20}
						delay={0}
					>
						<div>
							<img src='image-coinix.png' alt='' />
						</div>
						<div>
							<img src='icon-earth.svg' alt='' />
						</div>

						<div>
							<img src='icon-bitcoin.svg' alt='' />
						</div>

						<div>
							<img src='icon-bfn.svg' alt='' />
						</div>
					</StyledCircle>
				</CircleContainer>
			</CircleWrapper>
			<NoOverflow>
				<StyledImage
					initial={{ opacity: 1, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeOut', duration: 2 }}
				>
					<img src='image-niko-min.png' alt='' />
					{/* <Hr>
					<hr />
				</Hr> */}
				</StyledImage>
			</NoOverflow>
			<Line>
				<div className='hr'></div>
				<div className='shadow'></div>
			</Line>
		</Wrapper>
	);
};
export default CircleAnimation;
