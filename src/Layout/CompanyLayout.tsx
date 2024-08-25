import { Outlet } from 'react-router-dom';
import Footer from '../components/company/Footer';
import Header from '../components/company/Header';

const CompanyLayout = () => {
	return (
		<>
			<Header />
			<div className="container max-w-85">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default CompanyLayout;
