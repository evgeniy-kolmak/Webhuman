import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-scroll';
import './Sidebar.css'

export default function Sidebar() {

  return (
    <Menu right customBurgerIcon={<img src="/images/menu.svg" />} >
      <ul className="list-ite">
        <li className="list-item"><Link activeClass="link" to="home" spy={true} smooth={true} duration={500}>Главная</Link></li>
        <li className="list-item"><Link activeClass="link" to="about" spy={true} smooth={true} duration={500}>Обо мне</Link></li>
        <li className="list-item"><Link activeClass="link" to="portfolio" spy={true} smooth={true} duration={500}>Портфолио</Link></li>
        <li className="list-item"><Link activeClass="link" to="contacts" spy={true} smooth={true} duration={500}>Контакты</Link></li>
      </ul>
      <a href="#" className="btn download-cv--sidebar" download>Скачать CV</a>
    </ Menu>
  );

}