
import { ReactNode } from 'react';
import './AppProposition.css';

type props = {
	children: ReactNode;
}

function AppProposition({children}: props) {
	return (
		<div className="app-row-proposition">
			{children}
		</div>
	)
}

export default AppProposition;
