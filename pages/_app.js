import Layout from '../components/Layout';
import GlobalStyle from '../components/GlobalStyle';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Theme from '../components/theme/theme';
import Cursor from '../components/Cursor';

function MyApp({ Component, pageProps, router }) {
	return (
		<>
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
