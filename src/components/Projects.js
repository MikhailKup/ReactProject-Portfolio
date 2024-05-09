import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { uniqueId } from 'lodash'; 
import { ProjectCard } from "./ProjectCard";
import { russianLocales } from '../locales/rus';
import { rusReactProjects } from '../data/rusReactProjects';
import { reactProjects } from '../data/reactProjects';
import { rusJSProjects } from '../data/rusJSProjects';
import { jsProjects } from '../data/jsProjects';
import { rusHtmlCssProjects } from '../data/rusHtmlCssProjects';
import { htmlCssProjects } from '../data/htmlCssProjects';

import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = ({language}) => {

	const reactArr = (language === russianLocales) ? rusReactProjects : reactProjects;
	const jsArr = (language === russianLocales) ? rusJSProjects : jsProjects;
	const htmlCssArr = (language === russianLocales) ? rusHtmlCssProjects : htmlCssProjects;

  const mapping = (project) => {
    return (
      <ProjectCard
        key={uniqueId('Key_')}
        {...project}
        />
    )
  };
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
						<h2>{language.projects.title}</h2>
						<p>{language.projects.descr}</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills" className="projects__nav mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">{language.projects.pills.first}</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">{language.projects.pills.second}</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">{language.projects.pills.third}</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{
											reactArr.map((project) => mapping(project))
										}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
                <Row>
										{
											jsArr.map((project) => mapping(project))
										}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
                  <Row>
										{
											htmlCssArr.map((project) => mapping(project))
										}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="projects__bg" src={colorSharp2} alt='project-bg'></img>
    </section>
  )
}