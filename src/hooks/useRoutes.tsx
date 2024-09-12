import { useRoutes as routes } from 'react-router-dom';
import CompanyLayout from '../Layout/CompanyLayout';
import CandidateLayout from '../Layout/CandidateLayout';
import Homepage from '../pages/Homepage';

const useRoutes = () => {
	const companyRoutes = routes([
		{
			path: '/company',
			element: <CompanyLayout />,
			children: [
				{
					path: '/company',
					element: <Homepage />,
				},
			],
		},
	]);

	const candidateRoutes = routes([
		{
			path: '/candidate',
			element: <CandidateLayout />,
			children: [],
		},
	]);

	return { companyRoutes, candidateRoutes };
};

export default useRoutes;
