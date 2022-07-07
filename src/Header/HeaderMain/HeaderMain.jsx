import { Link } from 'react-scroll'
import './HeaderMain.css'

export default function HeaderMain() {
  return (
    <div className="main">
      <span className="hello">Привет</span>
      <h1 className="main-title">Я Евгений Колмак</h1>
      <p className="main-description">Уже год занимаюсь веб-разработкой, фронтенд и немного бэкенда. А так же,
        если Вам нужен дизайн сайта, верстка сайта, а
        может сайт под ключ? Тогда свяжитесь со мной</p>
      <Link className='main-button' to='contacts' spy={true} smooth={true} duration={500}>Связаться</Link>
    </div>


  );
}