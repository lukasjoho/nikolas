import Head from 'next/head';
import Layout from '../components/Layout';
import ReadList from '../components/ReadList';
const ThesisPage = () => {
	return (
		<Layout
			title='My Interests'
			superTitle='Reading'
			text={
				<>
					To me reading is the greatest source of inspiration and knowledge.
					Each book and every paper provides me with a new perspective and I
					seek to evolve from learning about what other people have already
					figured out. Check out my favorite books and the best research on
					crypto
				</>
			}
			textButton="Let's talk crypto"
		>
			<ReadList />
		</Layout>
	);
};
export default ThesisPage;
