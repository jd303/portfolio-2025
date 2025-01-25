
import { ReactNode } from 'react';
import './AppTitle.css';

type props = {
	children: ReactNode;
}

function AppTitle({children}: props) {
	return (
		<div className="app-row-title">
			{children}
		</div>
	)
}

export default AppTitle;
