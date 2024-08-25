import { useRoutes } from 'react-router-dom';
import CompanyLayout from './Layout/CompanyLayout';

function App() {
	const routes = useRoutes([
		{
			path: '/company',
			element: <CompanyLayout />,
			children: [],
		},
	]);

	return <>{routes}</>;
}

export default App;
