import { Outlet } from 'react-router';
import Canvas from './Canvas';
import './Layout.css';

function Layout() {

	return (
		<>
			<Canvas />
			<div className="layout">
				<div className="content"><Outlet /></div>
			</div>
		</>
	)
}

export default Layout;
