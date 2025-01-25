
import { ReactNode } from 'react';
import './AppRow.css';

type props = {
	title: ReactNode;
	proposition: ReactNode;
	images: ReactNode[];
}

function AppRow({title, proposition, images}: props) {
	return (
		<div className="app-row">
			<div className="app-row-images">{images}</div>
			<div className="app-row-vitae">
				{title}
				{proposition}
			</div>
		</div>
	)
}

export default AppRow;
