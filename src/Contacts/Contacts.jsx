import Form from "./Form";
import './Contacts.css'

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        <div className="contacts-wrapper">
          <div className="contact">
            <h3 className="contact-title">Связаться со мной</h3>
            <span className="call">Позвонить:<a className="contact-link" href="tel:+375297413900">+375 (29) 741-39-00</a></span>
            <span className="write" >Написать:<a className="contact-link" href="mailto:evgeniy.kolmak@gmail.com">evgeniy.kolmak@gmail.com</a></span>
          </div>
          <div className="contact-wrapper">
            <Form />
            <div className="contacts-wrapper-hero">
              <span className="square"></span>
              <img className="hero-image-contact" src="/images/hero/hero-contacts.png" alt="image: hero-at-workplace" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}