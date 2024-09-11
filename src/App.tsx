import useRoute from './hooks/useRoutes';

function App() {
	const { companyRoutes, candidateRoutes } = useRoute();

	return (
		<>
			{companyRoutes}
			{candidateRoutes}
		</>
	);
}

export default App;
