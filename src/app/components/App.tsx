
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

	const [showImage, setShowImage] = useState(1);
	const toggleShowImage = () => setShowImage(showImage == 4 && 1 || showImage + 1);

	const toggleImages = () => {
		const documentWidth = window.innerWidth;
		if (documentWidth < 1001) toggleShowImage();
		else toggleGalleryMode();
	}

	return (
		<>
			<div className={"app-row " + type + (galleryMode ? ' gallery-mode' : '') + (' show-' + showImage)}>
				<div className="app-row-images-wrapper" onClick={toggleImages}>
					{images.map((src: string, index: number) => (
						<img src={src} alt="" key={"img-" + index} />
					))}
					<button className="app-row-toggle-button" onClick={toggleGalleryMode}>➡️</button>
					<button className="app-row-toggle-mobile" onClick={toggleImages}>{showImage} / {images.length} &nbsp; ➡️</button>
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
