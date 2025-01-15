import './TimelineSegment.css';

type Props = {
	year: string;
	range: string;
	title: string;
	roles: string[];
	skills: string[];
}

function Highlight({ year, range, title, roles, skills }: Props) {

	return (
		<div className="timeline-segment">
			<span className="year">{year}</span>
			<div className="pipe"></div>
			<div className="block">
				<div className="range">{range}</div>
				<div className="title">{title}</div>
				<div className="roles">{
					roles.map((role: string, index: number) => (
						<div className="role" key={"role"+title+index}>{role}</div>
					))
				}</div>
				<ul className="skills">{
					skills.map((skill: string, index: number) => (
						<li className="role" key={"skill"+title+index}>{skill}</li>
					))
				}</ul>
			</div>
		</div>
	)
}

export default Highlight;
