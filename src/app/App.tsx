import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout';
import Home from './Home';
import CareerTimeline from './CareerTimeline';
import SkillsPage from './SkillsPage';
import SnakeVisualisation from './SnakeVisualisation';
import Exerciser from './Exerciser';
import Triangular from './Triangular';

function App() {
	const location = useLocation();
	return (
		<>
			<iframe src="/triangular" className="triangular-visualisation"></iframe>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/career-timeline" element={<CareerTimeline />} />
						<Route path="/skills" element={<SkillsPage />} />
					</Route>
					<Route path="/snake-visualisation" element={<SnakeVisualisation />} />
					<Route path="/exerciser-visualisation" element={<Exerciser />} />
					<Route path="/triangular" element={<Triangular />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;