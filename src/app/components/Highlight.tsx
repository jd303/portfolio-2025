import './Highlight.css';

type Props = {
	children: string;
	id: string;
	scrollTo: (ref: string) => void,
  }

function Highlight({children, id, scrollTo}: Props) {
	return (
		<span className="highlight" onClick={() => scrollTo(id)}>{children}</span>
	)
}

export default Highlight;
