import React from 'react';
import Header from '../components/company/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/company/Footer';

const CandidateLayout = () => {
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

export default CandidateLayout;
