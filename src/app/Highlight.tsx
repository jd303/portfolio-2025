import './Highlight.css';

type Props = {
	children: string;
  }

function Highlight({children}: Props) {

	return (
		<span className="highlight">{children}</span>
	)
}

export default Highlight;
