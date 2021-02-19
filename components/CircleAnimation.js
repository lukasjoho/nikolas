import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
`;
const CircleContainer = styled.div`
	position: absolute;
	display: inline-flex;
	width: ${(props) => `${props.size}px`};

	height: ${(props) => `${props.size}px`};
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	z-index: 1;
	margin-top: -10%;
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
	@keyframes rotationreverse {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-360deg);
		}
	}
	position: absolute;
	opacity: ${(props) => props.opacity};
	width: ${(props) => `${props.circle}px`};
	height: ${(props) => `${props.circle}px`};
	border: 1px solid rgba(200, 200, 200, 1);
	border-radius: 50%;
	transform: rotate(0deg);
	animation: rotationreverse ${(props) => `${props.duration}s`} infinite linear;

	div {
		position: absolute;
		width: ${(props) => `${props.icon}px`};
		height: ${(props) => `${props.icon}px`};
		transform: rotate(0deg);

		animation: rotation ${(props) => `${props.duration}s`} infinite linear;
		img {
			width: 100%;
		}
		&:nth-child(1) {
			top: ${(props) => `${(-1 * props.icon) / 2}px`}; /* -child size/2 */
			left: ${(props) => `${(props.circle - props.icon) / 2}px`};
		}
		&:nth-child(2) {
			bottom: ${(props) => `${(-1 * props.icon) / 2}px`}; /* -child size/2 */
			left: ${(props) => `${(props.circle - props.icon) / 2}px`};
		}
		&:nth-child(3) {
			top: ${(props) =>
				`${(props.circle - props.icon) / 2}px`}; /* -child size/2 */
			left: ${(props) => `${(-1 * props.icon) / 2}px`};
		}
		&:nth-child(4) {
			top: ${(props) =>
				`${(props.circle - props.icon) / 2}px`}; /* -child size/2 */
			right: ${(props) => `${(-1 * props.icon) / 2}px`};
		}
	}
`;

const Image = styled.div`
	width: 100%;
	font-size: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 2;
	img {
		position: relative;
		width: 80%;
		bottom: 0px;
		margin: auto;
	}
`;
const Line = styled.div`
	position: absolute;
	height: 200px;
	width: 150%;
	bottom: -200px;
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
		box-shadow: 0px 40px 30px -40px #c7f1fd50;
	}
`;
const CircleAnimation = () => {
	const circleL = 700;

	const circleS = 500;
	const iconL = 40;
	const iconS = 40;
	return (
		<Wrapper>
			<CircleContainer size={circleL + iconL}>
				<StyledCircle circle={circleL} icon={iconL} duration={60} opacity={0.1}>
					<div>
						<img src='image-coinix.png' alt='' />
					</div>
					<div>
						<img src='image-coinix.png' alt='' />
					</div>
					<div>
						<img src='image-coinix.png' alt='' />
					</div>
					<div>
						<img src='image-coinix.png' alt='' />
					</div>
				</StyledCircle>
				<StyledCircle circle={circleS} icon={iconS} duration={40} opacity={0.2}>
					<div>
						<img src='image-coinix.png' alt='' />
					</div>
					<div>
						<img src='image-coinix.png' alt='' />
					</div>
					<div>
						<img src='image-coinix.png' alt='' />
					</div>
					<div>
						<img src='image-coinix.png' alt='' />
					</div>
				</StyledCircle>
			</CircleContainer>
			<Image>
				<img src='image-niko.png' alt='' />
				{/* <Hr>
					<hr />
				</Hr> */}
			</Image>
			<Line>
				<div className='hr'></div>
				<div className='shadow'></div>
			</Line>
		</Wrapper>
	);
};
export default CircleAnimation;
