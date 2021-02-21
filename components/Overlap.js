import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import Breakpoint from './_breakpoints';

const StyledCard = styled(motion.div)`
	width: 100%;
	margin-bottom: 6rem;
	margin-top: 6rem;
	@media ${Breakpoint.lg} {
		margin-top: 0rem;
		margin-bottom: 0rem;
	}
	#canvas {
		margin-left: -5px;
		transform: scale(1);
		@media ${Breakpoint.lg} {
			margin-left: unset;
			margin-right: -10px;
		}
	}
`;
const Quote = styled(motion.div)`
	display: inline-block;
	border: 1px solid rgba(158, 174, 176, 0.15);
	border-radius: 1.5rem;
	padding: 1.5rem 1.5rem 1.5rem 1.5rem;
	box-shadow: 0 0px 20px -5px rgba(199, 241, 253, 0.25);
	font-size: 1.4rem;

	backdrop-filter: blur(5px);
	margin-left: -1.5rem;
	width: 85%;
	@media ${Breakpoint.lg} {
		padding: 2rem 2rem 2rem 2rem;
		font-size: 1.6rem;

		margin-left: -4rem;
	}
	h3 {
		margin-top: 0.5rem;
		font-size: 1.4rem;
		@media ${Breakpoint.md} {
			font-size: 1.4rem;
		}
	}
`;
const Topic = styled(motion.div)`
	display: inline-block;

	border: 1px solid rgba(158, 174, 176, 0.15);
	border-radius: 1.5rem;
	padding: 1.5rem 1.5rem 1.5rem 1.5rem;

	box-shadow: 0 0px 20px -5px rgba(199, 241, 253, 0.25);

	margin-left: -1.5rem;
	background: rgba(7, 25, 41, 0.5);
	backdrop-filter: blur(20px);
	margin-top: 2rem;
	position: relative;
	z-index: 4;

	@media ${Breakpoint.s} {
		display: inline-block;
		background: transparent;
		backdrop-filter: blur(5px);

		margin-top: -3rem;
		margin-left: 4rem;
	}
	@media ${Breakpoint.lg} {
		margin-left: 4rem;
		padding: 2rem;
	}
	h3 {
		font-weight: 400;
		font-size: 1.4rem;
		@media ${Breakpoint.md} {
			font-size: 1.6rem;
		}
	}
`;

const Image = styled(motion.div)`
	width: 60%;
	font-size: 0;
	position: absolute;
	bottom: -15rem;
	right: -2rem;
	z-index: 3;
	@media ${Breakpoint.s} {
		width: 45%;

		bottom: -12rem;
		right: -2rem;
	}
	@media ${Breakpoint.md} {
		width: 35%;

		bottom: -12rem;
		right: -2rem;
	}
	@media ${Breakpoint.lg} {
		width: 40%;
	}
	@media ${Breakpoint.xl} {
		bottom: -12rem;
		right: -3rem;
	}
	@media ${Breakpoint.xxl} {
		bottom: -12rem;
		right: -6rem;
		width: 42%;
	}
	img {
		width: 100%;
		border-radius: 1.5rem;
		box-shadow: 0 0px 20px -5px rgba(199, 241, 253, 1);
	}
`;
const Metric = styled(motion.div)`
	position: absolute;
	top: 1rem;
	left: 1rem;
	display: inline-block;
	border: 1px solid rgba(158, 174, 176, 0.15);
	border-radius: 1.5rem;
	padding: 1.5rem 3rem 1.5rem 1.5rem;
	box-shadow: 0 0px 20px -5px rgba(199, 241, 253, 0.25);
	z-index: 3;
	backdrop-filter: blur(10px);

	.label {
		font-size: 1.6rem;
		span {
			font-size: 1.4rem;
		}
	}
	.trend {
		color: #1ba41b;
		font-size: 1.6rem;
		img {
			height: 1.6rem;
			margin-right: 0.5rem;
			margin-bottom: -0.15rem;
		}
	}
	.number {
		margin: 0.1rem 0;
	}
	@media ${Breakpoint.md} {
		padding: 2rem 4rem 2rem 2rem;

		top: 2rem;
		left: 3rem;
	}
`;
const ChartContainer = styled.div`
	position: relative;
`;
const Overlap = () => {
	const [chartdata, setChartdata] = useState(null);
	useEffect(() => {
		var ctx = document.getElementById('canvas').getContext('2d');
		var gradient = ctx.createLinearGradient(0, 0, 0, 400);
		gradient.addColorStop(0, '#9EAEB0');
		gradient.addColorStop(0.9, 'transparent');
		console.log('i was mounteassssd');
		const data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: gradient,
					pointBorderColor: '#c7f1fd',
					borderColor: '#c7f1fd',
					borderWidth: 3,
					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
					hoverBorderColor: 'rgba(255,99,132,1)',
					data: [62, 59, 65, 63, 70, 75, 81],
				},
			],
		};
		setChartdata(data);
	}, []);

	return (
		<StyledCard>
			<Quote
				initial={{ opacity: 0, scale: 0.7, y: 0 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.1 }}
			>
				<p>
					Ignore a disruptive innovation because of its infancy and it will
					disrupt your business a day later.
				</p>
				<h3>Clayton M. Christensen</h3>
			</Quote>
			<ChartContainer>
				<Metric
					initial={{ opacity: 0, scale: 0.7, y: 0 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
				>
					<p className='label'>
						MCap <span>(Trillion)</span>
					</p>
					<h3 className='number'>1.452 $</h3>
					<p className='trend'>
						<img src='icon-angle-double-up.svg' alt='' />
						200%
					</p>
				</Metric>
				<Image
					initial={{ opacity: 0, scale: 0.7, y: 0 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.4 }}
				>
					<img src='image-ba.jpg' alt='' />
				</Image>

				<Line
					id='canvas'
					data={chartdata}
					width={100}
					height={60}
					options={{
						maintainAspectRatio: true,
						legend: {
							display: false,
						},
						scales: {
							gridLines: [
								{
									color: 'red',
								},
							],
							xAxes: [
								{
									gridLines: {
										color: 'rgba(158,174,176,0.05)',
									},
									ticks: {
										display: false, //this will remove only the label
										lineHeight: 0,
									},
								},
							],
							yAxes: [
								{
									gridLines: {
										color: 'rgba(158,174,176,0.05)',
									},
									ticks: {
										display: false, //this will remove only the label
									},
								},
							],
						},
					}}
				/>
			</ChartContainer>
			<Topic
				initial={{ opacity: 0, scale: 0.7, y: 0 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.3 }}
			>
				<h3>
					Digtal Assets will be <br />
					the futures asset class{' '}
				</h3>
			</Topic>
		</StyledCard>
	);
};
export default Overlap;
