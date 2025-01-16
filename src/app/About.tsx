import AboutThing from './AboutThing';
import BackButton from './BackButton';
import './About.css';

function About() {

	return (
		<>
			<BackButton />
			<div className="about">
				<AboutThing>I love AI.</AboutThing>
				<AboutThing>AI has ethical implications in creative work.</AboutThing>
				<AboutThing>20 years experience in digital development.</AboutThing>
				<AboutThing>I love DnD.</AboutThing>
				<AboutThing>Making people laugh is a virtue.</AboutThing>
			</div>
		</>
	)
}

export default About;
