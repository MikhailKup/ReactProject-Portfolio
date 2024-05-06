export const SkillsItem = ({percent, skill}) => {
	const circleStyle = {
		'stroke-dashoffset': `calc(440 - (440 * ${percent}) / 100)`,
		'stroke': '#75329F',
	};
	return (
		<div className='skills__item item-skills'>
			<div className="item-skills__card">
				<div className="item-skills__box">
					<div className="percent">
						<svg>
							<circle cx="70" cy="70" r="70"></circle>
							<circle cx="70" cy="70" r="70" style={circleStyle}></circle>
						</svg>
						<div className="number">
							<h2>{percent}<span>%</span></h2>
						</div>
						<h3>{skill}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};