import BackButton from './components/BackButton';
import { motion } from 'framer-motion';
import './SkillsPage.css';
import Bubble from './components/Bubble';

function SkillsPage() {

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
			<BackButton />
			<div className="page-content skills-page">
				<p className="intro">A selection of skills I have developed over my career.</p>
				<hr />
				<h1>Development</h1>
				<div className="skills-section">
					<Bubble color="primary">HTML</Bubble>
					<Bubble color="primary">CSS</Bubble>
					<Bubble color="primary">Javascript</Bubble>
					<Bubble color="primary">Typescript</Bubble>
					<Bubble color="primary">React</Bubble>
					<Bubble color="primary">NextJS</Bubble>
					<Bubble color="primary">ThreeJS</Bubble>
					<Bubble color="primary">Canvas</Bubble>
					<Bubble color="primary">NodeJS</Bubble>
					<Bubble color="primary">PHP</Bubble>
					<Bubble color="primary">Flutter</Bubble>
					<Bubble color="primary">Capacitor</Bubble>
					<Bubble color="primary">Cordova</Bubble>
					<Bubble color="primary">Bitbucket</Bubble>
					<Bubble color="primary">Github</Bubble>
					<Bubble color="primary">Shopify</Bubble>
					<Bubble color="primary">Drupal</Bubble>
					<Bubble color="primary">Umbraco</Bubble>
					<Bubble color="primary">Location Services</Bubble>
					<Bubble color="primary">Push Notifications</Bubble>
					<Bubble color="primary">In-app Purchases</Bubble>
				</div>
				<hr />
				<h1>Design</h1>
				<div className="skills-section">
					<Bubble color="primary">Figma</Bubble>
					<Bubble color="primary">Photoshop</Bubble>
					<Bubble color="primary">Illustrator</Bubble>
					<Bubble color="primary">Design Matching</Bubble>
					<Bubble color="primary">User Experience</Bubble>
					<Bubble color="primary">Responsive Development</Bubble>
				</div>
				<hr />
				<h1>Production</h1>
				<div className="skills-section">
					<Bubble color="primary">Figma</Bubble>
					<Bubble color="primary">Photoshop</Bubble>
					<Bubble color="primary">Design Matching</Bubble>
					<Bubble color="primary">Written Sskills</Bubble>
					<Bubble color="primary">Time Management</Bubble>
					<Bubble color="primary">Ticket Management</Bubble>
				</div>
			</div>
		</motion.div>
	)
}

export default SkillsPage;
