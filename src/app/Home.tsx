import { Link } from 'react-router';
import Highlight from './Highlight';
import './Home.css'
import { useState } from 'react';

function Home() {

	const [selectedContent, setSelectedContent] = useState('react');

	const setContent = (which: string) => {
		setSelectedContent(which);
	}

	return (
		<>
			<div className="page-content home">
				<div className="intro">
					20 years of digital development experience.  Recently:
					<Highlight selected={selectedContent == 'react'} onClick={() => setContent('react')}>React &amp; NextJs,</Highlight>
					<Highlight selected={selectedContent == 'flutter'} onClick={() => setContent('flutter')}>Flutter apps,</Highlight> process, strategy, leadership,
					<Highlight selected={selectedContent == 'ai'} onClick={() => setContent('ai')}>AI,</Highlight> and
					<Highlight selected={selectedContent == 'threejs'} onClick={() => setContent('threejs')}>ThreeJS.</Highlight>  Open for work.  Please,
					<Highlight selected={selectedContent == 'contact'} onClick={() => setContent('contact')}>get in touch.</Highlight>
				</div>
				<div>Or see...
					<menu>
						<Link to="/career-timeline">Career Timeline</Link>
						<Link to="/project-hightlights">Project Highlights</Link>
						<Link to="/about">About Me</Link>
						<Link to="https://github.com/jd303?tab=repositories" target="_blank">Github</Link>
					</menu>
				</div>
			</div>
			<div className={"page-subcontent demo-react"+(selectedContent == 'react' && ' on' || '')}>
				<div className="intro">
					React Quick Demo
				</div>
			</div>
			<div className={"page-subcontent demo-flutter"+(selectedContent == 'flutter' && ' on' || '')}>
				<div className="intro">
					Flutter Quick Demo
				</div>
			</div>
			<div className={"page-subcontent demo-ai"+(selectedContent == 'threejs' && ' on' || '')}>
				<div className="intro">
					ThreeJs Quick Demonstration
				</div>
			</div>
			<div className={"page-subcontent demo-threejs"+(selectedContent == 'ai' && ' on' || '')}>
				<div className="intro">
					AI Quick Demonstration
				</div>
			</div>
			<div className={"page-subcontent contact"+(selectedContent == 'contact' && ' on' || '')}>
				<div className="intro">
					Contact
				</div>
			</div>
		</>
	)
}

export default Home;
