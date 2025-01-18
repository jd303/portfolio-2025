import { Link } from 'react-router';
import { useState } from 'react';
import Highlight from './components/Highlight';
import FracturedImage from './components/FracturedImage';
import FannedImageRow from './components/FannedImageRow';
import FannedImage from './components/FannedImage';
import './Home.css';

import reactKojima from '../assets/react/kojima.webp';
import reactLaika from '../assets/react/laika.webp';
import st1 from '../assets/flutter/st_1.webp';
import st2 from '../assets/flutter/st_2.webp';
import st3 from '../assets/flutter/st_3.webp';
import st4 from '../assets/flutter/st_4.webp';
import civstart_1 from '../assets/flutter/civstart_1.webp';
import civstart_2 from '../assets/flutter/civstart_2.webp';
import civstart_3 from '../assets/flutter/civstart_3.webp';
import civstart_4 from '../assets/flutter/civstart_4.webp';

function Home() {

	const [selectedContent, setSelectedContent] = useState('react');

	const setContent = (which: string) => {
		setSelectedContent(which);
	}

	return (
		<>
			<section className="page-content home">
				<div className="intro">
					20 years of digital development experience.  Open for work.  Please,
					<Highlight selected={selectedContent == 'contact'} onClick={() => setContent('contact')}>get in touch.</Highlight>
					<br /><br />
					Recent work:
					<Highlight selected={selectedContent == 'react'} onClick={() => setContent('react')}>React &amp; NextJs,</Highlight>
					<Highlight selected={selectedContent == 'flutter'} onClick={() => setContent('flutter')}>Flutter apps,</Highlight> process, strategy, leadership,
					<Highlight selected={selectedContent == 'ai'} onClick={() => setContent('ai')}>AI,</Highlight> and
					<Highlight selected={selectedContent == 'visualisations'} onClick={() => setContent('visualisations')}>Visualisations.</Highlight>

				</div>
				<div className="menu">
					<menu>
						Or see...
						<Link to="/career-timeline">Career Timeline</Link>
						<Link to="/project-hightlights">Project Highlights</Link>
						<Link to="/about">About Me</Link>
						<Link to="https://github.com/jd303?tab=repositories" target="_blank">Github</Link>
					</menu>
				</div>
			</section>
			<section className={"page-content demo-react" + (selectedContent == 'react' && ' on' || '')}>
				<header>
					<span>W</span><span>E</span><span>B</span><span></span>/<span>R</span><span>E</span><span>A</span><span>C</span><span>T</span>
				</header>
				<FracturedImage image={reactKojima}></FracturedImage>
				<FracturedImage image={reactLaika}></FracturedImage>
			</section>
			<section className={"page-content demo-flutter" + (selectedContent == 'flutter' && ' on' || '')}>
				<header>
					<span>F</span><span>L</span><span>U</span><span>T</span><span>T</span><span>E</span><span>R</span>
				</header>
				<FannedImageRow>
					<div className="fanned-title">Standing Tall</div>
					<div className="fanned-flex">
						<FannedImage image={st1}></FannedImage>
						<FannedImage image={st2}></FannedImage>
						<FannedImage image={st3}></FannedImage>
						<FannedImage image={st4}></FannedImage>
					</div>
				</FannedImageRow>
				<FannedImageRow>
					<div className="fanned-title">CivStart</div>
					<div className="fanned-flex">
						<FannedImage image={civstart_1}></FannedImage>
						<FannedImage image={civstart_2}></FannedImage>
						<FannedImage image={civstart_3}></FannedImage>
						<FannedImage image={civstart_4}></FannedImage>
					</div>
				</FannedImageRow>
			</section>
			<section className={"page-content demo-ai" + (selectedContent == 'ai' && ' on' || '')}>
				<header><span>A</span><span>I</span></header>
			</section>
			<section className={"page-content demo-visualisations" + (selectedContent == 'visualisations' && ' on' || '')}>
				<header>
					<span>V</span><span>I</span><span>S</span><span>U</span><span>A</span><span>L</span><span>S</span><span>A</span><span>T</span><span>I</span><span>O</span><span>N</span><span>S</span>
				</header>
				<iframe src="/snake-visualisation" className="snake-visualisation"></iframe>
				<iframe src="/exerciser-visualisation" className="exerciser-visualisation"></iframe>
			</section>
			<section className={"page-content contact" + (selectedContent == 'contact' && ' on' || '')}>
				<header>
					<span>C</span><span>O</span><span>N</span><span>T</span><span>A</span><span>C</span><span>T</span>
				</header>
				Contact
			</section>
		</>
	)
}

export default Home;
