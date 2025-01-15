import './Highlight.css';

type Props = {
	children: string;
	selected: boolean;
	onClick: () => void;
  }

function Highlight({children, selected, onClick}: Props) {

	return (
		<span className={"highlight"+(selected && ' selected' || '')} onClick={onClick}>{children}</span>
	)
}

export default Highlight;
