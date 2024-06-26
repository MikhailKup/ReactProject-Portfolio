import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a className="proj-imgbx" href={link} target='_blank' rel="noreferrer">
        <img src={imgUrl}  alt='project'/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </Col>
  )
}