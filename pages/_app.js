import Layout from '../components/Layout';
import GlobalStyle from '../components/GlobalStyle';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Theme from '../components/theme/theme';
import Cursor from '../components/Cursor';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<link
					rel='icon'
					type='image/svg'
					sizes='32x32'
					href='/icon-favicon.svg'
				/>
				<link rel='apple-touch-icon' sizes='180x180' href='/icon-favicon.png' />
			</Head>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<AnimateSharedLayout type='crossfade'>
					<Component {...pageProps} router={router.route} key={router.route} />
				</AnimateSharedLayout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
