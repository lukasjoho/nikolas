import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
const StyledCard = styled(motion.div)`
	width: 100%;
	#canvas {
		margin-left: -10px;
		margin-right: -10px;
	}
`;
const Quote = styled(motion.div)`
	display: inline-block;
	border: 1px solid rgba(158, 174, 176, 0.15);
	border-radius: 1.5rem;
	padding: 2rem 2rem 2rem 2rem;
	box-shadow: 0 0px 20px -5px rgba(199, 241, 253, 0.25);
	font-size: 1.4rem;
	backdrop-filter: blur(5px);
	margin-left: -4rem;
`;
const Topic = styled(motion.div)`
	display: inline-block;
	border: 1px solid rgba(158, 174, 176, 0.15);
	border-radius: 1.5rem;
	padding: 2rem 2rem 2rem 2rem;
	box-shadow: 0 0px 20px -5px rgba(199, 241, 253, 0.25);
	font-size: 1.6rem;
	margin-left: 4rem;
	backdrop-filter: blur(5px);
	position: absolute;
	bottom: -4rem;
	left: 0;

	h3 {
		font-weight: 400;
	}
`;
const Image = styled(motion.div)`
	width: 40%;
	font-size: 0;
	position: absolute;
	bottom: -30%;
	right: -20%;

	img {
		width: 100%;
		border-radius: 1.5rem;
		box-shadow: 0 0px 20px -5px rgba(199, 241, 253, 1);
	}
`;
const Metric = styled(motion.div)`
	position: absolute;
	top: 2rem;
	left: 2rem;
	display: inline-block;
	border: 1px solid rgba(158, 174, 176, 0.15);
	border-radius: 1.5rem;
	padding: 2rem 4rem 2rem 2rem;
	box-shadow: 0 0px 20px -5px rgba(199, 241, 253, 0.25);
	.label {
		font-size: 1.6rem;
	}
	.trend {
		color: #1ba41b;
		font-size: 1.6rem;
		img {
			height: 1.6rem;
			margin-right: 0.5rem;
		}
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
				initial={{ opacity: 0, scale: 0.95, y: 0 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 0.3 }}
			>
				<p>Disruptive technologies typically enable new markets to emerge</p>
				<h3>Clayton M. Christensen</h3>
			</Quote>
			<ChartContainer>
				<Metric
					initial={{ opacity: 0, scale: 0.95, y: 0 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.4 }}
				>
					<p className='label'>Bitcoin</p>
					<h3 className='number'>54,371$</h3>
					<p className='trend'>
						<img src='icon-angle-double-up.svg' alt='' />
						520%
					</p>
				</Metric>
				<Image
					initial={{ opacity: 0, scale: 0.95, y: 0 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.6 }}
				>
					<img src='image-ba.jpg' alt='' />
				</Image>
				<Topic
					initial={{ opacity: 0, scale: 0.95, y: 0 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.5 }}
				>
					<h3>
						... it is visible that value fluctuations <br />
						become less intesne over time
					</h3>
				</Topic>
				<Line
					id='canvas'
					data={chartdata}
					width={110}
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
		</StyledCard>
	);
};
export default Overlap;
