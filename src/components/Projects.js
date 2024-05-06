import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { uniqueId } from 'lodash'; 
import { ProjectCard } from "./ProjectCard";
import { reactProjects } from '../data/reactProjects';
import { jsProjects } from '../data/jsProjects';
import { htmlCssProjects } from '../data/htmlCssProjects';

import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
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
						<h2>Projects</h2>
						<p>Here are the projects I have made</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills" className="projects__nav mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">React projects</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">JavaScript projects</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">HTML/CSS projects</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{
											reactProjects.map((project) => mapping(project))
										}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
                <Row>
										{
											jsProjects.map((project) => mapping(project))
										}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
                  <Row>
										{
											htmlCssProjects.map((project) => mapping(project))
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