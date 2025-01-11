import { Link } from 'react-router';
import Highlight from './Highlight';
import './Home.css'

function Home() {

	return (
		<>
			<div className="page-content home">
				<div className="intro">
					20 years of digital development experience.  Recent experiences in <Highlight>React &amp; NextJs sites</Highlight>, <Highlight>Flutter apps</Highlight>, process, strategy, leadership, and <Highlight>ThreeJS</Highlight>.  Open for work.  Please, <Highlight>get in touch</Highlight>.
				</div>
				<div>Or see...
					<menu>
						<Link to="/career-timeline">Career Timeline</Link>
						<Link to="/project-hightlights">Project Highlights</Link>
					</menu>
				</div>
			</div>
			<div className="page-content career-timeline">
				<div className="intro">
					20 years of digital development experience.  Recent experiences in <Highlight>React &amp; NextJs sites</Highlight>, <Highlight>Flutter apps</Highlight>, process, strategy, leadership, and <Highlight>ThreeJS</Highlight>.  Open for work.  Please, <Highlight>get in touch</Highlight>.
				</div>
			</div>
		</>
	)
}

export default Home;
