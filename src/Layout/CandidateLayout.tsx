import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const CandidateLayout = () => {
	return (
		<>
			<Header />
			<div className="container">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default CandidateLayout;
