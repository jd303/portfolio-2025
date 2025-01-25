
import { ReactNode, useState } from 'react';
import './App.css';
import Bubble from './Bubble';

type props = {
	type: string;
	title: ReactNode;
	proposition: ReactNode;
	roles: string[];
	tech: string[];
	images: string[];
}

function App({ type, title, proposition, roles, tech, images }: props) {
	const [galleryMode, setGalleryMode] = useState(false);
	const toggleGalleryMode = () => setGalleryMode(!galleryMode);

	return (
		<>
			<div className={"app-row " + type + (galleryMode ? ' gallery-mode' : '')}>
				<div className="app-row-images-wrapper">
					{images.map((src: string, index: number) => (
						<img src={src} alt="" key={"img-" + index} />
					))}
					<button className="app-row-toggle-button" onClick={toggleGalleryMode}>➡️</button>
				</div>
				<div className="app-row-vitae">
					<div className="app-row-vitae-info">
						<div className="app-row-title-wrapper">{title}</div>
						<div className="app-row-proposition-wrapper">{proposition}</div>
						<div className="app-row-roles-wrapper">
							<div className="app-row-roles-title">Roles</div>
							{roles.map((role: string, index: number) => (
								<Bubble color="primary" key={'app-roles-' + index}>{role}</Bubble>
							))}
						</div>
						<div className="app-row-tech-wrapper">
							<div className="app-row-tech-title">Tech</div>
							{tech.map((text: string, index: number) => (
								<Bubble color="primary" key={'app-tech-' + index}>{text}</Bubble>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App;
