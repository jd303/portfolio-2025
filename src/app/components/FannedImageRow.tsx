
import { ReactNode } from 'react';
import './FannedImageRow.css';

type props = {
	children: ReactNode;
}

function FannedImageRow({children}: props) {
	return (
		<div className="fanned-image-row">{children}</div>
	)
}

export default FannedImageRow;
