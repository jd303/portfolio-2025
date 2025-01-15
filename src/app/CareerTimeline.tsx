import BackButton from './BackButton';
import TimelineSegment from './TimelineSegment';
import './CareerTimeline.css';

function Home() {

	return (
		<>
			<BackButton />
			<div className="page-content career-timeline">
				<div className="vertical-rule"></div>
				<TimelineSegment year="2025" range="Feb 2021 - Present" title="Miroma Project Factory" roles={["Developer", "Senior Developer"]} skills={['React / NextJS', 'HTML, CSS and JS', 'Cordova', 'Flutter', 'Three.js', 'AI / LLMs', 'NodeJS development', 'Drupal and theme development', 'Team Leadership', 'Project Management & planning', 'Coding standards and styling', 'Code Reviews and collaboration']}></TimelineSegment>
				<TimelineSegment year="2012" range="Aug 2010 - 2012" title="applabs" roles={["Senior Developer"]} skills={['Designing mobile apps', 'User experience and app CMS backends for a range of high profile clients', 'Website design & development', 'Drupal custom development']}></TimelineSegment>
				<TimelineSegment year="2010" range="Apr 2010 - Aug 2010" title="Brighton Consulting" roles={["Web Developer & Designer."]} skills={['Web Development', 'Digital Design', 'Advertising and marketing assets']}></TimelineSegment>
				<TimelineSegment year="2010" range="Mar 2006 - Mar 2010" title="Creative Intersection" roles={["Web and graphic designer."]} skills={['Website design & development', 'Video & audio production', 'Simple 3D animation / modelling', 'Drupal and theme development', 'Paypal, and payment gateways', 'Email, Apache webserver & DNS management', 'The management of team & project resources', 'Tender & brief preparation']}></TimelineSegment>
				<TimelineSegment year="2006" range="2003 - 2006" title="Bachelor of Communications Design" roles={["QUT Brisbane"]} skills={[]}></TimelineSegment>
			</div>
		</>
	)
}

export default Home;
