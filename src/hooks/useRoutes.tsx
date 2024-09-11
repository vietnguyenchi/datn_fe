import { useRoutes as routes } from 'react-router-dom';
import CompanyLayout from '../Layout/CompanyLayout';
import CandidateLayout from '../Layout/CandidateLayout';
import DashBoard from '../pages/company/DashBoard';
import Overview from '../pages/company/Overview';
import MyJobs from '../pages/company/MyJobs';

const useRoutes = () => {
	const companyRoutes = routes([
		{
			path: '/company',
			element: <CompanyLayout />,
			children: [
				{
					path: 'dashboard',
					element: <DashBoard />,
					children: [
						{
							path: '',
							element: <Overview />,
						},
						{
							path: 'my-jobs',
							element: <MyJobs />,
						}
					]
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
