import { ReactNode } from 'react';
import './SectionHeader.css';

type Props = {
	children: ReactNode[];
}

function SectionHeader({ children }: Props) {
	return (
		<header className="section-header">{children}</header>
	)
}

export default SectionHeader;
