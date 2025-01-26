
import { ReactNode } from 'react';
import './Apps.css';

type props = {
	children: ReactNode[];
}

function Apps({ children }: props) {
	const next = () => {
		const screenWidth = window.innerWidth;
		document.querySelector('.apps-wrapper')!.scrollTo({ left: document.querySelector('.apps-wrapper')!.scrollLeft + screenWidth, behavior: 'smooth' });
	}

	const prev = () => {
		const screenWidth = window.innerWidth;
		document.querySelector('.apps-wrapper')!.scrollTo({ left: document.querySelector('.apps-wrapper')!.scrollLeft - screenWidth, behavior: 'smooth' });
	}

	return (
		<div className="apps-wrapper">
			{children}

			<div className="apps-wrapper-controls carousel-controls">
				<button onClick={prev} className="left"></button>
				<button onClick={next} className="right"></button>
			</div>
		</div>
	)
}

export default Apps;
