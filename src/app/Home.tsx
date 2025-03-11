import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Apps from './components/Apps';
import App from './components/App';
import SectionHeader from './components/SectionHeader';
import AppTitle from './components/AppTitle';
import AppProposition from './components/AppProposition';
import Bubble from './components/Bubble';
import ToolImage from './components/ToolImage';
import InformativeVideo from './components/InformativeVideo';
import WebGallery from './components/WebGallery';
import './Home.css';

import icoLinkedIn from '../assets/ico.linkedin.svg';
//import icoGithub from '../assets/ico.github.svg';
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
import gr_1 from '../assets/flutter/gr_1.webp';
import gr_2 from '../assets/flutter/gr_2.webp';
import gr_3 from '../assets/flutter/gr_3.webp';
import int_1 from '../assets/flutter/int_1.webp';
import int_2 from '../assets/flutter/int_2.webp';
import int_3 from '../assets/flutter/int_3.webp';
import int_4 from '../assets/flutter/int_4.webp';
import monarchLLM from '../assets/ai/MonarchLLM.mp4';
import HILLM from '../assets/ai/humaninsights.mp4';

import lgHTML from '../assets/logos/lg.html.svg';
import lgCSS from '../assets/logos/lg.css.svg';
import lgJavascript from '../assets/logos/lg.javascript.svg';
import lgTypescript from '../assets/logos/lg.typescript.svg';
import lgReact from '../assets/logos/lg.react.svg';
import lgAngular from '../assets/logos/lg.angular.svg';
import lgNext from '../assets/logos/lg.next.svg';
import lgThree from '../assets/logos/lg.three.svg';
import lgCanvas from '../assets/logos/lg.canvas.svg';
import lgNode from '../assets/logos/lg.node.svg';
import lgOpenAi from '../assets/logos/lg.openai.svg';
import lgPhp from '../assets/logos/lg.php.svg';
import lgAws from '../assets/logos/lg.aws.svg';
import lgFlutter from '../assets/logos/lg.flutter.svg';
import lgBloc from '../assets/logos/lg.bloc.webp';
import lgCapacitor from '../assets/logos/lg.capacitor.svg';
import lgCordova from '../assets/logos/lg.cordova.webp';
import lgRaboBank from '../assets/logos/lg.rabobank.svg';
import lgPermira from '../assets/logos/lg.permira.svg';
import lgKJP from '../assets/logos/lg.kjp.svg';
import TimelineSegment from './components/TimelineSegment';
import { useRef } from 'react';

function Home() {
	const scrollTo = (id: string) => {
		const element = document.querySelector(`#${id}`);
		element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
	}

	const timelineRef = useRef(null);

	const timelineShift = (forward: boolean) => {
		console.log('clicky');
		if (!timelineRef || !timelineRef.current) return;
		const ref = (timelineRef!.current! as HTMLElement);
		const segment = ref.querySelector(".timeline-segment");
		const segmentWidth = (segment as HTMLElement).offsetWidth;
		if (forward) ref.scrollTo({ left: ref.scrollLeft + segmentWidth, behavior: "smooth" });
		else ref.scrollTo({ left: ref.scrollLeft - segmentWidth, behavior: "smooth" });
		console.log(timelineRef);
	}

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
			<section className="page-content home" id="section-home">
				<div className="intro">
					<div className="larger">Hello 👋</div>
					<br />
					I'm a Senior Software Engineer with a front-end web and app focus.  I'm looking for my next great role.
					<br /><br />
					<div>Please, <Link to="https://www.linkedin.com/in/joel-dawson-32876934/" target="_blank">get in touch</Link>.</div>
				</div>
				<div className="menu">
					<menu>
						Or see...
						<Link to="/career-timeline">Career Timeline</Link>
						<Link to="/skills">Skills</Link>
						<Link to="https://www.linkedin.com/in/joel-dawson-32876934/" target="_blank">LinkedIn</Link>
						<Link to="https://github.com/jd303?tab=repositories" target="_blank">Github</Link>
					</menu>
					<div className="scroll-down-indicator" onClick={() => scrollTo('section-vitae')}>⬇️</div>
				</div>
			</section>
			<section className="page-content section-vitae" id="section-vitae">
				<SectionHeader><span>V</span><span>I</span><span>T</span><span>A</span><span>E</span></SectionHeader>
				<div className="vitae-heading">
					<div className="vitae-subheading">
						Getting Personal
					</div>
					<div className="vitae-main-heading">
						A few highlights from my career.
					</div>
				</div>
				<div className="vitae-grid">
					<div className="vitae-tools-row vitae-cell-1">
						<div className="vitae-grid-title">🏆 Development Achievements</div>
					</div>
					<div className="vitae-cell vitae-cell-2 flexing">
						<Bubble color="faint"><div className="margined-row">🌐</div>Crafted and shipped over <strong>75 high-quality websites</strong> and <strong>7 cross-platform apps</strong> to happy clients, using modern technical solutions.</Bubble>
						<Bubble color="faint"><div className="margined-row"><ToolImage src={lgKJP} alt="Kojima Productions" title="Kojima Productions" /></div>Scoped, planned and single-handedly built websites for famous clients such as <strong>Kojima Productions</strong> directly with lead client producers and brand experts.</Bubble>
						<Bubble color="faint"><div className="margined-row"><ToolImage src={lgRaboBank} alt="Rabobank" title="Rabobank" /><ToolImage src={lgPermira} alt="Rabobank" title="Rabobank" /></div>Upgraded and supported the front end for high-risk web presences for finanical organisations <strong>Rabo Bank and Permira Investments</strong>.</Bubble>
						<Bubble color="faint"><div className="margined-row">🛠️ 🔨 🔫</div>Developed a reputation at Miroma Project Factory as a <strong>set-and-forget developer</strong>.  With a scope or without, I delivered projects dependably in budget.</Bubble>
						<Bubble color="faint"><div className="margined-row"><ToolImage src={lgNode} alt="NodeJS" title="NodeJS servers" /><ToolImage src={lgOpenAi} alt="OpenAI" title="LLMs and Chatbots" /></div>Crafted an in-house NodeJS framework for building AI Agents with the <strong>OpenAI agent API</strong>.</Bubble>
					</div>
					<div className="vitae-tools-row vitae-cell-3">
						<div className="vitae-grid-title">🏆 Production Achievements</div>
					</div>
					<div className="vitae-cell vitae-cell-4 flexing">
						<Bubble color="faint"><div className="margined-row">💯</div>Drove <strong>discovery and technical direction</strong> for over 100 client projects, as well as setting internal technical direction and standards.</Bubble>
						<Bubble color="faint"><div className="margined-row">📄</div>Lead <strong>technical direction and best practice</strong> for internal development, production and QC teams for over 5 years.</Bubble>
					</div>
					<div className="vitae-tools-row vitae-cell-5">
						<div className="vitae-grid-title">💎 Values</div>
					</div>
					<div className="vitae-cell vitae-cell-6 flexing">
						<div className="vitae-bubbles">
							<Bubble color="faint">End the day proud of your work.</Bubble>
							<Bubble color="faint">Equality is important.</Bubble>
							<Bubble color="faint">AI is the future.</Bubble>
							<Bubble color="faint">Stories are transformative.</Bubble>
							<Bubble color="faint">Laughing is a virtue.</Bubble>
							<Bubble color="faint">Great collaboration, great work.</Bubble>
						</div>
					</div>
					<div className="vitae-tools-row vitae-cell-7">
						<div className="vitae-grid-title">🛠️ Technical Skills (Excerpt)</div>
					</div>
					<div className="vitae-cell vitae-cell-8">
						<div className="vitae-tools flexing">
							<Bubble color="faint">
								<div className="vitae-tools-details">
									<div className="vitae-tools-description">
										<div>Web Development Core</div>
										<div>Since 2006</div>
									</div>
									<ToolImage src={lgHTML} alt="Web Basics" title="HTML" />
									<ToolImage src={lgCSS} alt="CSS" title="CSS" />
									<ToolImage src={lgJavascript} alt="Javascript" title="Javascript" />
									<ToolImage src={lgTypescript} alt="Typescript" title="Typescript" />
								</div>
							</Bubble>
							<Bubble color="faint">
								<div className="vitae-tools-details">
									<div className="vitae-tools-description">
										<div>Web Frameworks</div>
										<div>Since 2016</div>
									</div>
									<ToolImage src={lgReact} alt="React" title="React" />
									<ToolImage src={lgNext} alt="NextJS" title="NextJS" />
									<ToolImage src={lgAngular} alt="Angular" title="Angular" />
								</div>
							</Bubble>
							<Bubble color="faint">
								<div className="vitae-tools-details">
									<div className="vitae-tools-description">
										<div>Backend</div>
										<div>Since 2006</div>
									</div>
									<ToolImage src={lgNode} alt="NodeJS" title="NodeJS servers" />
									<ToolImage src={lgPhp} alt="PHP" title="PHP Backends" />
									<ToolImage src={lgAws} alt="AWS" title="AWS Admin" />
								</div>
							</Bubble>
							<Bubble color="faint">
								<div className="vitae-tools-details">
									<div className="vitae-tools-description">
										<div>Apps</div>
										<div>Since 2015</div>
									</div>
									<ToolImage src={lgFlutter} alt="Flutter" title="Flutter" />
									<ToolImage src={lgBloc} alt="Bloc" title="Bloc & Cubits" />
									<ToolImage src={lgCapacitor} alt="Capacitor" title="Ionic Capacitor" />
									<ToolImage src={lgCordova} alt="Cordova" title="Cordova" />
								</div>
							</Bubble>
							<Bubble color="faint">
								<div className="vitae-tools-details">
									<div className="vitae-tools-description">
										<div>Animation and Styling</div>
										<div>Since 2016</div>
									</div>
									<ToolImage src={lgThree} alt="ThreeJs" title="ThreeJS 3D and Visualisations" />
									<ToolImage src={lgCanvas} alt="Canvas" title="Canvas Visualisations" />
									<ToolImage src={lgCSS} alt="CSS" title="Animations and transitions" />
								</div>
							</Bubble>
							<div className="vitae-tools-addendum"><Link to="/skills">... see the full list</Link></div>
						</div>
					</div>
				</div>
				<div className="vitae-references">
					<div className="vitae-references-content">
						<div className="references-title">Some of the talented coworkers who would be happy to talk me up.  Reach out for a chat.</div>
						<div className="vitae-reference-links">
							<Link className="contact-method" to="https://www.linkedin.com/in/katjaderobinson/" target="_blank">
								<img src={icoLinkedIn} alt="LinkedIn" /><p>Kat Robinson</p>
							</Link>
							<Link className="contact-method" to="https://www.linkedin.com/in/george-tulloch" target="_blank">
								<img src={icoLinkedIn} alt="LinkedIn" /><p>George Tulloch</p>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="page-content section-timeline" id="section-timeline">
				<SectionHeader><span>C</span><span>A</span><span>R</span><span>E</span><span>E</span><span>R</span><span>&nbsp;</span><span>T</span><span>I</span><span>M</span><span>E</span><span>L</span><span>I</span><span>N</span><span>E</span></SectionHeader>
				<div className="timeline-scroller" ref={timelineRef}>
					<div className="timeline-segments">
						<TimelineSegment year="2025 - 2012" range="Present - Feb 2012" title="Miroma Project Factory" roles={["Tech Team Lead", "Senior Front-end Developer", "Designer & Developer"]} isHorizontal={true}></TimelineSegment>
						<TimelineSegment year="2012 - 2010" range="Feb 2012 - Aug 2010" title="applabs" roles={["Senior Developer", "Technical Lead"]} isHorizontal={true}></TimelineSegment>
						<TimelineSegment year="2010 - 2010" range="Aug 2010 - Apr 2010" title="Brighton Consulting" roles={["Web Developer", "Graphic Developer"]} isHorizontal={true}></TimelineSegment>
						<TimelineSegment year="2010 - 2006" range="Mar 2010 - Mar 2006" title="Creative Intersection" roles={["Full-stack Designer Developer"]} isHorizontal={true}></TimelineSegment>
						<TimelineSegment year="2006" range="2003 - 2006" title="Bachelor of Communications Design" roles={["QUT Brisbane"]} skills={[]} isHorizontal={true}></TimelineSegment>
					</div>
				</div>
				<div className="timeline-controls carousel-controls">
					<button className="left" onClick={() => timelineShift(false)}></button>
					<button className="right" onClick={() => timelineShift(true)}></button>
				</div>
				<div className="link"><Link to="/career-timeline">... see detailed timeline</Link></div>
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
				<Apps>
					<App
						type="tablet"
						title={<AppTitle>Standing Tall 2.0</AppTitle>}
						proposition={<AppProposition>Preventing one of the leading causes of elderly mortality through regular balance exercises.</AppProposition>}
						roles={["Discovery", "Frontend Developer", "Producer"]}
						tech={["Flutter", "Bloc/Cubit", "Material Design", "Android Recommended Architecture", "CI/CD", "In-App Purchases", "Drift DB", "Data Modelling", "REST API", "WebView", "Commercial"]}
						images={[st_2_1, st_2_2, st_2_3, st_2_4]} />
					<App
						type="tablet"
						title={<AppTitle>Standing Tall 1.0</AppTitle>}
						proposition={<AppProposition>Preventing one of the leading causes of elderly mortality through regular balance exercises.</AppProposition>}
						roles={["Discovery", "Lead Frontend Developer", "Producer", "Designer", "UX", "Branding"]}
						tech={["Cordova", "Angular", "Data Modelling", "REST API", "Custom Design", "UX", "Branding", "Medical Trial"]}
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
					<App
						type="tablet"
						title={<AppTitle>Intuition 2.0</AppTitle>}
						proposition={<AppProposition>A data and state heavy character creator and rules repository for a homebrew roleplaying system.</AppProposition>}
						roles={["Lead Frontend Developer", "Branding", "Design", "UX"]}
						tech={["React", "Typescript", "Firebase", "SASS"]}
						images={[int_1, int_2, int_3, int_4]} />
					<App
						type="mobile"
						title={<AppTitle>Gold Rush</AppTitle>}
						proposition={<AppProposition>A location-based promotional game where users could find real gold in the world.</AppProposition>}
						roles={["Lead Frontend Developer", "Branding", "Design", "UX"]}
						tech={["Cordova", "Angular"]}
						images={[gr_1, gr_2, gr_3]} />
				</Apps>
			</section>
			<section className="page-content section-visualisations" id="section-visualisations">
				<SectionHeader>
					<span>V</span><span>I</span><span>S</span><span>U</span><span>A</span><span>L</span><span>I</span><span>S</span><span>A</span><span>T</span><span>I</span><span>O</span><span>N</span><span>S</span>
				</SectionHeader>
				<div className="visualisations-title">ThreeJS and Canvas visualisations + interactives.</div>
				<p>Clipped text and mouse-path graphic, for website header. &lt;canvas&gt;</p>
				<p className="only-mobile">(Automated when no mouse present)</p>
				<iframe src="/snake-visualisation" className="snake-visualisation"></iframe>
				<p>Animated trainer with API to schedule hundreds of exercise animations.  ThreeJS.</p>
				<iframe src="/exerciser" className="exerciser-visualisation"></iframe>
				<p>An animated website background. ThreeJS.</p>
				<p className="only-mobile">(Automated when no mouse present)</p>
				<iframe src="/triangular" className="triangular-frame-visualisation"></iframe>
			</section>
			<section className="page-content section-ai" id="section-ai">
				<SectionHeader>
					<span>A</span><span>I</span>
				</SectionHeader>
				<InformativeVideo title="Monarch Athletic Club" desc="An LLM Agent which guides users through their health struggles, and offers advice and Monarch services with a friendly tone and disposition.">
					<video src={monarchLLM} loop={true} autoPlay={true} controls muted></video>
				</InformativeVideo>
				<InformativeVideo title="Sydney Ethics Centre" desc="A personalised discovery of self, this LLM Agent analyses Ethics materials and compares them to the user's selections, determining the options on future pages.">
					<video src={HILLM} loop={true} autoPlay={true} controls muted></video>
				</InformativeVideo>
			</section>
			<section className="section-fin">
				<div onClick={() => scrollTo('section-home')}>BACK TO TOP</div>
			</section>
		</motion.div>
	)
}

export default Home;
