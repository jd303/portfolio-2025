import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { createRoot } from 'react-dom/client';

import Layout from './app/Layout';
import Home from './app/Home';
import CareerTimeline from './app/CareerTimeline';
import SnakeVisualisation from './app/SnakeVisualisation';
import './index.css';
import ProjectHighlights from './app/ProjectHighlights';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="career-timeline" element={<CareerTimeline />} />
				<Route path="/project-hightlights" element={<ProjectHighlights />} />
				</Route>
				<Route path="/snake-visualisation" element={<SnakeVisualisation />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)