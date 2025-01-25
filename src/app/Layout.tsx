import { Outlet } from 'react-router';
import './Layout.css';

function Layout() {
	return (
		<>
			<div className="layout">
				<div className="content"><Outlet /></div>
			</div>
		</>
	)
}

export default Layout;
