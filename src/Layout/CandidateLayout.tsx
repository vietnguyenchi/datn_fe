import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

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
