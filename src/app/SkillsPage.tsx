import BackButton from './components/BackButton';
import { motion } from 'framer-motion';
import './SkillsPage.css';

function SkillsPage() {

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
			<BackButton />
			<div className="page-content skills-page">
				<p className="intro">A selection of skills I have developed over my career.</p>
				<hr />
				<h1>Development</h1>
				<div>
					Flutter, etc
				</div>
				<hr />
				<h1>Design</h1>
				<hr />
				<h1>Production</h1>
				<hr />
				<h1>Admin</h1>
			</div>
		</motion.div>
	)
}

export default SkillsPage;
