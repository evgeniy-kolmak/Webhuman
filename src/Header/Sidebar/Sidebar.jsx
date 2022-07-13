import './Sidebar.css'
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-scroll';
import React, { useContext } from 'react';
import { Context } from '../../Context';


export default function Sidebar() {
  const ctx = useContext(Context);
  return (
    <Menu isOpen={ctx.isMenuOpen} onStateChange={(state) => ctx.stateChangeHandler(state)} right customBurgerIcon={<img src="/images/menu.svg" />} width={270} >
      <h2 className="menu-title">Меню</h2>
      <ul className="list-items--sidebar">
        <li className="list-item--sidebar"><Link onClick={ctx.toggleMenu} activeClass="link--sidebar" to="home" spy={true} smooth={true} duration={500}>Главная</Link></li>
        <li className="list-item--sidebar"><Link onClick={ctx.toggleMenu} activeClass="link--sidebar" to="about" spy={true} smooth={true} duration={500}>Обо мне</Link></li>
        <li className="list-item--sidebar"><Link onClick={ctx.toggleMenu} activeClass="link--sidebar" to="portfolio" spy={true} smooth={true} duration={500}>Портфолио</Link></li>
        <li className="list-item--sidebar"><Link onClick={ctx.toggleMenu} activeClass="link--sidebar" to="contacts" spy={true} smooth={true} duration={500}>Контакты</Link></li>
      </ul>
      <div className="social--sidebar">
        <a className="social-link--sidebar" href="https://vk.com/evgeniykolmak" target="_blank" >
          <svg className="social-icon">
            <use href="/images/sprite.svg#vk"></use>
          </svg>
        </a>
        <a className="social-link--sidebar" href="https://www.instagram.com/evgeniykolmak/" target="_blank">
          <svg className="social-icon">
            <use href="/images/sprite.svg#instagram"></use>
          </svg>
        </a>
        <a className="social-link--sidebar" href="https://github.com/evgeniy-kolmak" target="_blank" >
          <svg className="social-icon">
            <use href="/images/sprite.svg#github"></use>
          </svg>
        </a>
        <a className="social-link--sidebar" href="https://t.me/evgeniykolmak" target="_blank" >
          <svg className="social-icon">
            <use href="/images/sprite.svg#telegram"></use>
          </svg>
        </a>
        <a className="social-link--sidebar" href="https://www.linkedin.com/in/evgeniy-kolmak-372b43227/" target="_blank">
          <svg className="social-icon">
            <use href="/images/sprite.svg#in"></use>
          </svg>
        </a>
      </div>
      <a href="#" className="btn download-cv--sidebar" download>Скачать CV</a>
    </ Menu>
  );

}