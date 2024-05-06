import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/header-img_2.svg'

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ['React Developer', 'JS/TS Developer', 'Web Developer'];
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
							<span className='tagline'>Welcome to my Portfolio</span>
							<h1>{''} <span className='wrap'>{text}</span> </h1>
							<p>I am a Frontend developer from Perm. Familiar with many popular and widespread web technologies and keep my knowledge up to date.</p>
							<p>Have a year of experience in web development, from HTML and CSS to the advanced JavaScript framework React.</p>
							<p>I want to continue to develop in this area and acquire new skills to become a professional in my field.</p>
							<a href='#connect'>Let's connect<ArrowRightCircle size={25}/></a>
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