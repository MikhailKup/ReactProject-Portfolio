import '../styles/language.scss'

export const Language = () => {
	return (
		<div className="language">
			<div className="language__box">
				<h4>Select language</h4>
				<div className="language__buttons">
					<button className="language__btn">Русский</button>
					<button className="language__btn">English</button>
				</div>
			</div>
		</div>
	);
};