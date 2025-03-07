import BackButton from './components/BackButton';
import { motion } from 'framer-motion';
import './SkillsPage.css';
import Bubble from './components/Bubble';

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
import lgHeroku from '../assets/logos/lg.heroku.svg';
import lgLinux from '../assets/logos/lg.linux.svg';
import lgNetlify from '../assets/logos/lg.netlify.svg';
import lgVercel from '../assets/logos/lg.vercel.svg';
import lgFlutter from '../assets/logos/lg.flutter.svg';
import lgCapacitor from '../assets/logos/lg.capacitor.svg';
import lgCordova from '../assets/logos/lg.cordova.webp';
import lgBitbucket from '../assets/logos/lg.bitbucket.svg';
import lgGithub from '../assets/logos/lg.github.svg';
import lgDrupal from '../assets/logos/lg.drupal.svg';
import lgUmbraco from '../assets/logos/lg.umbraco.svg';
import lgStrapi from '../assets/logos/lg.strapi.svg';
import ToolImage from './components/ToolImage';

function SkillsPage() {

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
			<BackButton />
			<div className="page-content skills-page">
				<p className="intro">A selection of skills I have developed over my career.</p>
				<hr />
				<h1>Development</h1>
				<div className="skills-section">
					<h2>Web Development Core</h2>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgHTML} alt="HTML" title="HTML" />
							<div className="details">
								<div className="title">
									HTML
									<div className="subtext">Shipped over 75 sites</div>
								</div>
								<div className="since">Since 2006</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgCSS} alt="CSS" title="CSS" />
							<div className="details">
								<div className="title">
									CSS
									<div className="subtext">Unnumerable pixel-perfect design implementations.</div>
								</div>
								<div className="since">Since 2006</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgJavascript} alt="Javascript" title="Javascript" />
							<div className="details">
								<div className="title">Javascript</div>
								<div className="since">Since 2006</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgTypescript} alt="Typescript" title="Typescript" />
							<div className="details">
								<div className="title">Typescript</div>
								<div className="since">Since 2018</div>
							</div>
						</div>
					</Bubble>
				</div>
				<div className="skills-section">
					<h2>Web Frameworks</h2>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgReact} alt="React" title="React" />
							<div className="details">
								<div className="title">
									React
									<div className="subtext">Most recent development environment</div>
								</div>
								<div className="since">Since 2021</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgNext} alt="NextJS" title="NextJS" />
							<div className="details">
								<div className="title">
									NextJS
									<div className="subtext">Most recent development environment</div>
								</div>
								<div className="since">Since 2022</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgAngular} alt="Angular" title="Angular" />
							<div className="details">
								<div className="title">Angular</div>
								<div className="since">Since 2016</div>
							</div>
						</div>
					</Bubble>
				</div>
				<div className="skills-section">
					<h2>Backend</h2>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgNode} alt="NodeJS" title="NodeJS" />
							<div className="details">
								<div className="title">NodeJS</div>
								<div className="since">Since 2018</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgPhp} alt="PHP" title="PHP" />
							<div className="details">
								<div className="title">PHP</div>
								<div className="since">Since 2006</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgAws} alt="AWS" title="AWS" />
							<div className="details">
								<div className="title">AWS</div>
								<div className="since">Since 2021</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgHeroku} alt="Heroku" title="Heroku" />
							<div className="details">
								<div className="title">Heroku</div>
								<div className="since">Since 2020</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgLinux} alt="Linux" title="Linux" />
							<div className="details">
								<div className="title">
									Linux
									<div className="subtext">Web servers, command line and shell</div>
								</div>
								<div className="since">Since 2016</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgNetlify} alt="Netlify" title="Netlify" />
							<div className="details">
								<div className="title">Netlify</div>
								<div className="since">Since 2023</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgVercel} alt="Vercel" title="Vercel" />
							<div className="details">
								<div className="title">Vercel</div>
								<div className="since">Since 2023</div>
							</div>
						</div>
					</Bubble>
				</div>
				<div className="skills-section">
					<h2>Apps</h2>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgFlutter} alt="Flutter" title="Flutter" />
							<div className="details">
								<div className="title">
									Flutter
									<div className="subtext">Deployed 3 apps, with Bloc &amp; Cubit</div>
								</div>
								<div className="since">Since 2023</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgCapacitor} alt="Capacitor" title="Capacitor" />
							<div className="details">
								<div className="title">
									Capacitor
									<div className="subtext">Maintained 2 apps</div>
								</div>
								<div className="since">Since 2020</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgCordova} alt="Cordova" title="Cordova" />
							<div className="details">
								<div className="title">
									Cordova
									<div className="subtext">Deployed 4 apps</div>
								</div>
								<div className="since">Since 2018</div>
							</div>
						</div>
					</Bubble>
				</div>
				<div className="skills-section">
					<h2>Animation and Styling</h2>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgThree} alt="ThreeJS" title="ThreeJS" />
							<div className="details">
								<div className="title">
									ThreeJS
									<div className="subtext">Highlight: a full-motion exercise model with hundreds of unique animations.</div>
								</div>
								<div className="since">Since 2018</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgCanvas} alt="Canvas" title="Canvas" />
							<div className="details">
								<div className="title">
									HTML Canvas
								</div>
								<div className="since">Since 2018</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgCSS} alt="CSS" title="CSS" />
							<div className="details">
								<div className="title">
									CSS Animations and Transitions
								</div>
								<div className="since">Since 2018</div>
							</div>
						</div></Bubble>
				</div>
				<div className="skills-section">
					<h2>AI &amp; LLMs</h2>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgOpenAi} alt="OpenAI" title="OpenAI" />
							<div className="details">
								<div className="title">
									OpenAI
									<div className="subtext">Highlight: A NodeJS framework for building agentic workflows, and rolling out 2 projects under budget and time.</div>
								</div>
								<div className="since">Since 2024</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgAws} alt="Amazon Q" title="Amazon Q" />
							<div className="details">
								<div className="title">
									Amazon Q
									<div className="subtext">VSCode plugin for code completions, refactors and review</div>
								</div>
								<div className="since">Since 2024</div>
							</div>
						</div>
					</Bubble>
				</div>
				<div className="skills-section">
					<h2>CMS</h2>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgDrupal} alt="Drupal" title="Drupal" />
							<div className="details">
								<div className="title">
									Drupal
									<div className="subtext">Theming, user experience, and ease-of-use</div>
								</div>
								<div className="since">Since 2014</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgUmbraco} alt="Umbraco" title="Umbraco" />
							<div className="details">
								<div className="title">
									Umbraco
									<div className="subtext">Content management and schema</div>
								</div>
								<div className="since">Since 2022</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgStrapi} alt="Strapi" title="Strapi" />
							<div className="details">
								<div className="title">
									Strapi
									<div className="subtext">Setup, content management and schema</div>
								</div>
								<div className="since">Since 2020</div>
							</div>
						</div>
					</Bubble>
				</div>
				<div className="skills-section">
					<h2>Code Collaboration</h2>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgBitbucket} alt="Bitbucket" title="Bitbucket" />
							<div className="details">
								<div className="title">
									Bitbucket
									<div className="subtext">Pipelines, code reviews and more</div>
								</div>
								<div className="since">Since 2016</div>
							</div>
						</div>
					</Bubble>
					<Bubble color="primary">
						<div className="skill-detailed">
							<ToolImage src={lgGithub} alt="Github" title="Github" />
							<div className="details">
								<div className="title">
									GitHub
									<div className="subtext">Personal code storage</div>
								</div>
								<div className="since">Since 2020</div>
							</div>
						</div>
					</Bubble>
				</div>
				<div className="skills-section">
					<h2>Miscellaneous</h2>
					<Bubble color="primary">Location Services</Bubble>
					<Bubble color="primary">Push Notifications</Bubble>
					<Bubble color="primary">In-app Purchases</Bubble>
					<Bubble color="primary">Team Leadership</Bubble>
					<Bubble color="primary">Technical Direction</Bubble>
					<Bubble color="primary">Project Discovery</Bubble>
					<Bubble color="primary">Figma</Bubble>
					<Bubble color="primary">Photoshop</Bubble>
					<Bubble color="primary">Illustrator</Bubble>
					<Bubble color="primary">Design Matching</Bubble>
					<Bubble color="primary">User Experience</Bubble>
					<Bubble color="primary">Responsive Development</Bubble>
					<Bubble color="primary">Written Skills</Bubble>
					<Bubble color="primary">Time Management</Bubble>
					<Bubble color="primary">Ticket Management</Bubble>
				</div>
			</div>
		</motion.div >
	)
}

export default SkillsPage;
