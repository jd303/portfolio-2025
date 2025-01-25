import { useRef } from 'react';
import './ToolImage.css';

type Props = {
	src: string;
	alt: string;
	title: string;
}

function ToolImage({ src, alt, title }: Props) {

	// Swinging parameters
	let angle = 0; // Start angle
	let amplitude = 50; // Initial maximum rotation in degrees
	const speed = 0.12; // Speed of oscillation
	const dampingFactor = 0.99; // Damping factor (closer to 1 = slower tapering)
	const sign = useRef<HTMLDivElement>(null);

	const setSwing = () => {
		angle = 35; // Start angle
		amplitude = 35; // Initial maximum rotation in degrees

		swing();
	}

	const haltSwing = () => {
		angle = 0; // Start angle
		amplitude = 0; // Initial maximum rotation in degrees
	}

	function swing() {
		// Calculate the rotation angle using sine wave
		const rotation = amplitude * Math.sin(angle);

		// Apply the rotation to the sign
		if ((sign.current as HTMLDivElement)) {
			(sign.current as HTMLDivElement).style.transform = `translateX(-50%) rotate(${rotation}deg)`;
		}

		// Increment the angle for continuous motion
		angle += speed;

		// Reduce the amplitude over time to create damping
		amplitude *= dampingFactor;

		// Stop the animation when amplitude becomes negligible
		if (amplitude > 0.01) {
			requestAnimationFrame(swing);
		}
	}

	return (
		<div className="tool-image" onMouseEnter={setSwing} onMouseLeave={haltSwing}>
			<img src={src} alt={alt} />
			<div className="popup" ref={sign}>
				{title}
			</div>
		</div>
	)
}

export default ToolImage;
