
import { ReactNode } from 'react';
import './Bubble.css';

type props = {
	children: ReactNode;
	color?: string;
}

function Bubble({children, color}: props) {
	return (
		<div className="bubble-thing" attr-color={color ? color : 'white'}>
			{children}
		</div>
	)
}

export default Bubble;
