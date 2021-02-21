import Head from 'next/head';
import Layout from '../components/Layout';
import Overlap from '../components/Overlap';
const ThesisPage = () => {
	return (
		<Layout
			title='My Thesis'
			superTitle='Disruption'
			text={
				<>
					In my thesis I investigated wether or not cryptocurrencies might be a
					Disruptive Innovation. I developed an extensive framework that can
					identify disruptive characteristics and applied it to several
					cryptocurrencies. The results of this thesis let me to starting my
					career in the space.
				</>
			}
			textButton='Get an excerpt'
		>
			<Overlap />
		</Layout>
	);
};
export default ThesisPage;
