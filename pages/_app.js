import Layout from '../components/Layout';
import GlobalStyle from '../components/GlobalStyle';
import { AnimateSharedLayout } from 'framer-motion';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<AnimateSharedLayout type='crossfade'>
				<Component {...pageProps} />
			</AnimateSharedLayout>
		</>
	);
}

export default MyApp;
