import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contacts = ({ language }) => {
  return (
    <section className="contacts" id="connect">
      <Container>
        <Row>
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
            <div className="contacts__body">
              <h2>{language.contacts.title}</h2>
              <div className="contacts__item">
                <h6>{language.contacts.number}</h6>
                <p>+7963-017-4695</p>
              </div>
              <a href="mailto:fregat59-mk@yandex.ru" className="contacts__item pointer" target='_blank' rel="noreferrer">
                <h6>{language.contacts.email}</h6>
                <p>fregat59-mk@yandex.ru</p>
              </a>
              <a href="https://t.me/MikhailKuplinov" className="contacts__item pointer" target='_blank' rel="noreferrer">
                <h6>{language.contacts.telegram}</h6>
                <p>@MikhailKuplinov</p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}