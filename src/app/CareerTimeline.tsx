import BackButton from './components/BackButton';
import TimelineSegment from './components/TimelineSegment';
import './CareerTimeline.css';
import { motion } from 'framer-motion';

function Home() {

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
			<BackButton />
			<div className="page-content career-timeline">
				<div className="vertical-rule"></div>
				<TimelineSegment year="2025" range="Feb 2012 - Present" title="Miroma Project Factory" roles={["Tech Team Lead", "Senior Front-end Developer", "Designer & Developer"]} skills={['React, NextJS', 'Javascript, Typescript', 'Flutter', 'Cordova', 'Three.js', 'AI, LLMs', 'NodeJS', 'AWS, Heroku', 'Accessibility', 'REST APIs', 'Strapi, Drupal, Drupal Theming', 'Team Leadership', 'Technical Direction', 'Project Planning, Discovery', 'Code Reviews, Code Collaboration']}></TimelineSegment>
				<TimelineSegment year="2012" range="Aug 2010 - 2012" title="applabs" roles={["Senior Developer", "Technical Lead"]} skills={['Designing mobile apps', 'User experience and app CMS backends for a range of high profile clients', 'Website development', 'Graphic Design', 'Technical Mentoring', 'Drupal development', 'Client Management']}></TimelineSegment>
				<TimelineSegment year="2010" range="Apr 2010 - Aug 2010" title="Brighton Consulting" roles={["Web Developer", "Graphic Designer"]} skills={['Web Development', 'Print Design', 'Digital Design', 'Advertising and marketing assets']}></TimelineSegment>
				<TimelineSegment year="2010" range="Mar 2006 - Mar 2010" title="Creative Intersection" roles={["Full-stack Designer Developer"]} skills={['Website design & development', 'Video & audio production', '3D animation / modelling', 'Drupal and theme development', 'Print Design', 'Paypal, and payment gateways', 'Email, Apache webserver & DNS management', 'The management of team & project resources', 'Tender & brief preparation']}></TimelineSegment>
				<TimelineSegment year="2006" range="2003 - 2006" title="Bachelor of Communications Design" roles={["QUT Brisbane"]} skills={[]}></TimelineSegment>
			</div>
		</motion.div>
	)
}

export default Home;
