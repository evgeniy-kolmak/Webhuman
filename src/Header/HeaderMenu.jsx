import { Link } from 'react-scroll';
export default function HeaderMenu() {
  return (
    <ul className="list-items">
      <li className="list-item"><Link activeClass="link" to="home" spy={true} smooth={true} duration={500}>Главная</Link></li>
      <li className="list-item"><Link activeClass="link" to="about" spy={true} smooth={true} duration={500}>Обо мне</Link></li>
      <li className="list-item"><Link activeClass="link" to="portfolio" spy={true} smooth={true} duration={500}>Портфолио</Link></li>
      <li className="list-item"><Link activeClass="link" to="contacts" spy={true} smooth={true} duration={500}>Контакты</Link></li>
    </ul>
  );
}