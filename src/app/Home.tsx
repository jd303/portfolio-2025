import { Link } from 'react-router';
import { motion } from 'framer-motion';
//import Highlight from './components/Highlight';
import App from './components/App';
import SectionHeader from './components/SectionHeader';
import AppTitle from './components/AppTitle';
import AppProposition from './components/AppProposition';
import Bubble from './components/Bubble';
import ToolImage from './components/ToolImage';
import InformativeVideo from './components/InformativeVideo';
import WebGallery from './components/WebGallery';
//import WebGalleryImage from './components/WebGalleryImage';
import './Home.css';

import icoLinkedIn from '../assets/ico.linkedin.svg';
import icoGithub from '../assets/ico.github.svg';
import st_2_1 from '../assets/flutter/st_2_1.webp';
import st_2_2 from '../assets/flutter/st_2_2.webp';
import st_2_3 from '../assets/flutter/st_2_3.webp';
import st_2_4 from '../assets/flutter/st_2_4.webp';
import st_1_1 from '../assets/flutter/st_1_1.webp';
import st_1_2 from '../assets/flutter/st_1_2.webp';
import st_1_3 from '../assets/flutter/st_1_3.webp';
import st_1_4 from '../assets/flutter/st_1_4.webp';
import civstart_1 from '../assets/flutter/civstart_1.webp';
import civstart_2 from '../assets/flutter/civstart_2.webp';
import civstart_3 from '../assets/flutter/civstart_3.webp';
import civstart_4 from '../assets/flutter/civstart_4.webp';
import ren_1 from '../assets/flutter/ren_1.webp';
import ren_2 from '../assets/flutter/ren_2.webp';
import ren_3 from '../assets/flutter/ren_3.webp';
import ren_4 from '../assets/flutter/ren_4.webp';
import pp_1 from '../assets/flutter/pp_1.webp';
import pp_2 from '../assets/flutter/pp_2.webp';
import pp_3 from '../assets/flutter/pp_3.webp';
import pp_4 from '../assets/flutter/pp_4.webp';
import monarchLLM from '../assets/ai/MonarchLLM.mp4';
import HILLM from '../assets/ai/humaninsights.mp4';

import lgHTML from '../assets/logos/lg.html.svg';
import lgCSS from '../assets/logos/lg.css.svg';
import lgJavascript from '../assets/logos/lg.javascript.svg';
import lgTypescript from '../assets/logos/lg.typescript.svg';
import lgReact from '../assets/logos/lg.react.svg';
import lgNext from '../assets/logos/lg.next.svg';
import lgThree from '../assets/logos/lg.three.svg';
import lgNode from '../assets/logos/lg.node.svg';
import lgPhp from '../assets/logos/lg.php.svg';
import lgAws from '../assets/logos/lg.aws.svg';
import lgFlutter from '../assets/logos/lg.flutter.svg';
import lgBloc from '../assets/logos/lg.bloc.webp';
import lgCapacitor from '../assets/logos/lg.capacitor.svg';
import lgCordova from '../assets/logos/lg.cordova.webp';
import lgBitbucket from '../assets/logos/lg.bitbucket.svg';
import lgGithub from '../assets/logos/lg.github.svg';

function Home() {
	const scrollTo = (id: string) => {
		const element = document.querySelector(`#${id}`);
		element?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
	}

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
			<section className="page-content home" id="section-home">
				<div className="intro">
					<div className="larger">Hello 👋</div>
					<br />
					I'm a Senior full-stack Digital Developer with a front-end and app focus.  I'm looking for my next great role.
					<br /><br />
					<div>Please, get in touch.</div>
					{/*<br /><br />
					Recent work:
					<Highlight scrollTo={scrollTo} id='section-web'>Web, React &amp; NextJs,</Highlight>
					<Highlight scrollTo={scrollTo} id='section-apps'>Flutter & Cordova apps,</Highlight> process, strategy, leadership,
					<Highlight scrollTo={scrollTo} id='section-ai'>AI,</Highlight> and
					<Highlight scrollTo={scrollTo} id='section-visualisations'>Visualisations.</Highlight>*/}
				</div>
				<div className="menu">
					<menu>
						Or see...
						<Link to="/career-timeline">Career Timeline</Link>
						<Link to="/skills">Skills</Link>
						<Link to="https://github.com/jd303?tab=repositories" target="_blank">Github</Link>
					</menu>
				</div>
			</section>
			<section className="page-content section-vitae" id="section-vitae">
				<SectionHeader><span>V</span><span>I</span><span>T</span><span>A</span><span>E</span></SectionHeader>
				<div className="vitae-grid">
					<div className="vitae-cell vitae-cell-1">
						<div className="vitae-subheading">
							Getting Personal
						</div>
						<div className="vitae-heading">
							A little bit about me.
						</div>
					</div>
					<div className="vitae-cell vitae-cell-2">
						<div className="vitae-tools">
							<div className="vitae-tools-row">
								<div className="vitae-grid-title">Web</div>
							</div>
							<ToolImage src={lgHTML} alt="Web Basics" title="Years of websites" />
							<ToolImage src={lgCSS} alt="CSS" title="Wrangling the ol' CSS" />
							<ToolImage src={lgJavascript} alt="Javascript" title="Javascript: Vanilla and libraries" />
							<ToolImage src={lgTypescript} alt="Typescript" title="Typescript: level up Javascript" />
							<ToolImage src={lgReact} alt="React" title="React websites" />
							<ToolImage src={lgNext} alt="NextJS" title="NextJS websites" />
							<ToolImage src={lgThree} alt="ThreeJs" title="ThreeJS 3D and Visualisations" />
							<ToolImage src={lgNode} alt="NodeJS" title="NodeJS servers" />
							<ToolImage src={lgPhp} alt="PHP" title="PHP Backends" />
							<ToolImage src={lgAws} alt="AWS" title="AWS Admin" />
							<ToolImage src={lgBitbucket} alt="Bitbucket" title="A home for code" />
							<ToolImage src={lgGithub} alt="Github" title="A second home for code" />
						</div>
					</div>
					<div className="vitae-cell vitae-cell-3">
						<div className="links">
							<Link className="contact-method" to="https://www.linkedin.com/in/joel-dawson-32876934/" target="_blank">
								<img src={icoLinkedIn} alt="LinkedIn" /><p>Find me here</p>
							</Link>
							<Link className="contact-method" to="https://github.com/jd303" target="_blank">
								<img src={icoGithub} alt="LinkedIn" />
								<p>A sample of<br /> personal code</p>
							</Link>
						</div>
					</div>
					<div className="vitae-cell vitae-cell-4">
						<div className="vitae-grid-title">Achievements</div>
						<Bubble>Almost 20 years experience (so close!)</Bubble>
						<Bubble>Career skills covering Design and UX, Backend, Frontend and App Dev</Bubble>
						<Bubble>Career roles covering development, design, management and leadership</Bubble>
						<Bubble>A fourth fantastic thing</Bubble>
					</div>
					<div className="vitae-cell vitae-cell-5">
						<div className="vitae-tools">
							<div className="vitae-tools-row">
								<div className="vitae-grid-title">Apps</div>
							</div>
							<ToolImage src={lgFlutter} alt="Flutter" title="Flutter Apps" />
							<ToolImage src={lgBloc} alt="Bloc" title="Bloc & Cubits" />
							<ToolImage src={lgCapacitor} alt="Capacitor" title="Ionic Capacitor Apps" />
							<ToolImage src={lgCordova} alt="Cordova" title="Cordova Apps" />
						</div>
					</div>
					<div className="vitae-cell vitae-cell-6">
						<div className="vitae-grid-title">Values</div>
						<div className="vitae-bubbles">
							<Bubble>Ethics and morality is important.</Bubble>
							<Bubble>I love AI.</Bubble>
							<Bubble>DnD is great.</Bubble>
							<Bubble>Laughing is a virtue.</Bubble>
						</div>
					</div>
				</div>
			</section>
			<section className="page-content section-web" id="section-web">
				<SectionHeader>
					<span>W</span><span>E</span><span>B</span>
				</SectionHeader>
				<WebGallery />
			</section>
			<section className="page-content section-apps" id="section-apps">
				<SectionHeader>
					<span>A</span><span>P</span><span>P</span><span>S</span>
				</SectionHeader>
				<App
					type="tablet"
					title={<AppTitle>Standing Tall 2.0</AppTitle>}
					proposition={<AppProposition>Preventing one of the leading causes of elderly mortality through regular balance exercises.</AppProposition>}
					roles={["Frontend Developer", "Producer"]}
					tech={["Flutter", "Bloc/Cubit", "Material Design", "Android Recommended Architecture", "Commercial"]}
					images={[st_2_1, st_2_2, st_2_3, st_2_4]} />
				<App
					type="tablet"
					title={<AppTitle>Standing Tall 1.0</AppTitle>}
					proposition={<AppProposition>Preventing one of the leading causes of elderly mortality through regular balance exercises.</AppProposition>}
					roles={["Discovery", "Producer", "Designer", "UX", "Branding", "Lead Frontend Developer"]}
					tech={["Cordova", "Angular", "Custom Design", "UX", "Branding", "Medical Trial"]}
					images={[st_1_1, st_1_2, st_1_3, st_1_4]} />
				<App
					type="mobile"
					title={<AppTitle>CivStart</AppTitle>}
					proposition={<AppProposition>CivStart helps young veterans understand and reposition their skills, recognise their strengths, and convey these in a meaningful manner to potential employers</AppProposition>}
					roles={["Frontend Developer", "Producer"]}
					tech={["Flutter", "Bloc/Cubit", "Material Design", "Rapid Development Collaboration"]}
					images={[civstart_1, civstart_2, civstart_3, civstart_4]} />
				<App
					type="mobile"
					title={<AppTitle>ReNeuWell</AppTitle>}
					proposition={<AppProposition>Practices, activities and exercises to enforce mental wellbeing, including meditation, mindful colouring, positive thinking and empathy.</AppProposition>}
					roles={["Frontend Developer", "QC"]}
					tech={["Cordova", "Angular", "Firebase"]}
					images={[ren_1, ren_2, ren_3, ren_4]} />
				<App
					type="mobile"
					title={<AppTitle>Pat Pawtal</AppTitle>}
					proposition={<AppProposition>Practices, activities and exercises to enforce mental wellbeing, including meditation, mindful colouring, positive thinking and empathy.</AppProposition>}
					roles={["Lead Frontend Developer"]}
					tech={["Flutter", "Bloc/Cubit"]}
					images={[pp_1, pp_2, pp_3, pp_4]} />
			</section>
			<section className="page-content section-visualisations" id="section-visualisations">
				<SectionHeader>
					<span>V</span><span>I</span><span>S</span><span>U</span><span>A</span><span>L</span><span>I</span><span>S</span><span>A</span><span>T</span><span>I</span><span>O</span><span>N</span><span>S</span>
				</SectionHeader>
				<iframe src="/snake-visualisation" className="snake-visualisation"></iframe>
				<iframe src="/exerciser-visualisation" className="exerciser-visualisation"></iframe>
			</section>
			<section className="page-content section-ai" id="section-ai">
				<SectionHeader>
					<span>A</span><span>I</span>
				</SectionHeader>
				<InformativeVideo title="Monarch Athletic Club" desc="An LLM Agent which guides users through their health struggles, and offers advice and Monarch services with a friendly tone and disposition.">
					<video src={monarchLLM} loop={true} autoPlay={true} muted></video>
				</InformativeVideo>
				<InformativeVideo title="Sydney Ethics Centre" desc="A personalised discovery of self, this LLM Agent analyses Ethics materials and compares them to the user's selections, determining the options on future pages.">
					<video src={HILLM} loop={true} autoPlay={true} muted></video>
				</InformativeVideo>
			</section>
			<section className="section-fin">
				<div onClick={() => scrollTo('section-home')}>BACK TO TOP</div>
			</section>
		</motion.div>
	)
}

export default Home;
