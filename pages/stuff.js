import Head from 'next/head';
import Layout from '../components/Layout';
const ThesisPage = () => {
	return (
		<Layout
			title='My Interests'
			superTitle='Ressources'
			text={
				<>
					I am very keen to get to know the best tools and ressources to learn
					new stuff. Feel free to share your proposals.
				</>
			}
			textButton="Let's talk crypto"
		></Layout>
	);
};
export default ThesisPage;
