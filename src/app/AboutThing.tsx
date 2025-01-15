
import './AboutThing.css';

type props = {
	children: string;
}

function About({children}: props) {

	return (
		<>
			<div className="about-thing">{children}</div>
		</>
	)
}

export default About;
