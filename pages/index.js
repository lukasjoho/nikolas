import Head from 'next/head';
import CircleAnimation from '../components/CircleAnimation';
import Layout from '../components/Layout';
import Button from '../components/Button';
import toast, { Toaster } from 'react-hot-toast';
import IconPeace from '../public/icon-peace.svg';

const Home = () => {
	const notify = () => toast('Click through the menu');

	return (
		<Layout
			title='I am Nicolas'
			superTitle='Discovering'
			text={
				<>
					I am currently exploring the world of cryptocurrencies and work on the
					intersection between crypto products and business development. I stand
					for change, progress and technology while my biggest interests lay in
					climate change, innovation and brands.
				</>
			}
			textButton='Get To Know Me'
			tabTitle='About'
			toaster={notify}
		>
			<CircleAnimation />
			<Toaster
				position='top-center'
				toastOptions={{
					// Define default options
					className: '',
					style: {
						margin: '40px',
						background: 'linear-gradient(259.25deg, #C7F1FD 0%, #DEF8FF 100%)',
						color: '#020817',
						zIndex: 999,
						boxShadow: '0 0 5px 0px #C7F1FD',
					},
					duration: 1500,
					icon: <IconPeace />,
					// Default options for specific types
				}}
			/>
		</Layout>
	);
};
export default Home;
