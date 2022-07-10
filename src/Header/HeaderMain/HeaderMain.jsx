import { Link } from 'react-scroll'
import './HeaderMain.css'

export default function HeaderMain() {
  return (
    <div className="main">
      <div className="hello-container">
        <span className="hello">Привет</span>
        <ul className="hello-items">
          <li className="hello-item">мир !</li>
          <li className="hello-item">тебе !</li>
          <li className="hello-item">юзер !</li>
          <li className="hello-item">всем !</li>
        </ul>
      </div>
      <h1 className="main-title">Я Евгений Колмак</h1>
      <p className="main-description">Уже год занимаюсь веб-разработкой, фронтенд и немного бэкенда. А так же,
        если Вам нужен дизайн сайта, верстка сайта, а
        может сайт под ключ? Тогда свяжитесь со мной</p>
      <Link className='main-button' to='contacts' spy={true} smooth={true} duration={500}>Связаться</Link>
    </div>


  );
}