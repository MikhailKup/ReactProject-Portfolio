import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/header-img_2.svg'

export const Banner = ({language}) => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = language.banner.rotate;
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);
		return () => clearInterval(ticker);
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
		setText(updatedText);

		if (setIsDeleting) {
			setDelta(prevDelta => prevDelta/2)
		}
		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setDelta(period)
		} else if (isDeleting && updatedText === ''){
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(500)
		}
	};

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='align-items-center'>
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
						{({ isVisible }) =>
						<div className={isVisible ? 'animate__animated animate__fadeInLeft' : ''}>
							<span className='banner__tagline'>{language.banner.tagline}</span>
							<h1>{''} <span className='wrap'>{text}</span> </h1>
							<p>{language.banner.parag1}</p>
							<p>{language.banner.parag2}</p>
							<p>{language.banner.parag3}</p>
							<a href='#connect'>{language.banner.connect}<ArrowRightCircle size={25}/></a>
						</div>
						}
						</TrackVisibility>
					</Col>

					<Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt="Header img" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};