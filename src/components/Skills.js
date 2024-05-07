import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap'
import { SkillsItem } from './SkillsItem';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 770 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 770, min: 0 },
			items: 1
		}
	};

	return (
		<section className='skills' id='skills'>
			<Container>
				<Row>
					<Col>
						<div className="skills__box">
							<h2 className="skills__title">Skills</h2>
							<p className="skills__descr">The level of skills I have and my technology stack</p>
							<p className="skills__descr">&larr; Flip &rarr;</p>
							<Carousel responsive={responsive} 
							infinite={true}
							removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
							className='skills__slider'>
								<SkillsItem percent={95} skill={'HTML5'}/>
								<SkillsItem percent={95} skill={'CSS3'}/>
								<SkillsItem percent={90} skill={'JavaScript'}/>
								<SkillsItem percent={85} skill={'React/Redux'}/>
								<SkillsItem percent={85} skill={'SCSS, SASS'}/>
								<SkillsItem percent={80} skill={'Jest'}/>
								<SkillsItem percent={80} skill={'Git & Github'}/>
								<SkillsItem percent={80} skill={'Webpack'}/>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
			<img src={colorSharp} alt="skills-bg" className='skills__background'/>
		</section>
	);
};