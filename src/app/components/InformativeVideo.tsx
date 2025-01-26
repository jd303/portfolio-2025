import { ReactNode } from 'react';
import './InformativeVideo.css';

type Props = {
	children: ReactNode[] | ReactNode;
	title: string;
	desc: string;
}

function InformativeVideo({ children, title, desc }: Props) {
	return (
		<div className="informative-video">
			<div className="video">
				{children}
			</div>
			<div className="more">
				<div className="more-video-title">{title}</div>
				<div className="more-video-desc">{desc}</div>
			</div>
		</div>
	)
}

export default InformativeVideo;
