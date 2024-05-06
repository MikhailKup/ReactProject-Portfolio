import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contacts = () => {
  return (
    <section className="contacts" id="connect">
      <Container>
        <Row>
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
            <div className="contacts__body">
              <h2>Get In Touch</h2>
              <div className="contacts__item">
                <h6>My phone number:</h6>
                <p>+7963-017-4695</p>
                <div className="item__hover">
                  <p className='padding'>Call me &rarr;</p>
                </div>
              </div>
              <a href="mailto:fregat59-mk@yandex.ru" className="contacts__item pointer" target='_blank' rel="noreferrer">
                <h6>My email:</h6>
                <p>fregat59-mk@yandex.ru</p>
                <div className="item__hover">
                  <p>Click here &rarr;</p>
                </div>
              </a>
              <a href="https://t.me/MikhailKuplinov" className="contacts__item pointer" target='_blank' rel="noreferrer">
                <h6>My telegram:</h6>
                <p>@MikhailKuplinov</p>
                <div className="item__hover">
                  <p>Click here &rarr;</p>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}