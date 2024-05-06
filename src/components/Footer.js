import { Container, Row, Col } from 'react-bootstrap'
import navIcon1 from '../assets/img/github-icon.svg'
import navIcon2 from '../assets/img/telegram-icon.svg'
import navIcon3 from '../assets/img/vk-icon.svg'

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col>
						<div className="social-icon footer__icons">
							<a href="https://github.com/MikhailKup" target='_blank' rel="noreferrer"><img src={navIcon1} alt="nav-icon"/></a>
							<a href="https://t.me/MikhailKuplinov" target='_blank' rel="noreferrer"><img src={navIcon2} alt="nav-icon"/></a>
							<a href="https://vk.com/mikhailkuplinov" target='_blank' rel="noreferrer"><img src={navIcon3} alt="nav-icon"/></a>
						</div>
						<div className="footer__text">
							<p>Mikhail Kuplinov</p>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};