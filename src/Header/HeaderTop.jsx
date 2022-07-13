import { useState, useEffect } from "react";
import HeaderMenu from "./HeaderMenu";
import { Link } from 'react-scroll';

export default function HeaderTop() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    window.scrollY !== 0 ? setScroll(!scroll) : setScroll(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={scroll ? 'menu-wrapper menu-sticky' : 'menu-wrapper'}>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <svg className="logo">
            <use href="/images/sprite.svg#logo"></use>
          </svg>
        </Link>
        <HeaderMenu />
        <div className="social">
          <a className="social-link" href="https://vk.com/evgeniykolmak" target="_blank" >
            <svg className="social-icon">
              <use href="/images/sprite.svg#vk"></use>
            </svg>
          </a>
          <a className="social-link" href="https://www.instagram.com/evgeniykolmak/" target="_blank">
            <svg className="social-icon">
              <use href="/images/sprite.svg#instagram"></use>
            </svg>
          </a>
          <a className="social-link" href="https://github.com/evgeniy-kolmak" target="_blank" >
            <svg className="social-icon">
              <use href="/images/sprite.svg#github"></use>
            </svg>
          </a>
          <a className="social-icon" href="https://t.me/evgeniykolmak" target="_blank" >
            <svg className="social-icon">
              <use href="/images/sprite.svg#telegram"></use>
            </svg>
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/evgeniy-kolmak-372b43227/" target="_blank">
            <svg className="social-icon">
              <use href="/images/sprite.svg#in"></use>
            </svg>
          </a>
        </div>
        <a href="/images/Resume(Evgeniy_Kolmak)-RU.pdf" className="btn download-cv" download>Скачать CV</a>
      </div>
      <Link to="home" spy={true} smooth={true} duration={500}>
        <div className={scroll ? 'to-top--scroll to-top' : 'to-top'}>
          <svg className="to-top-icon">
            <use href="/images/sprite.svg#to-top"></use>
          </svg>
        </div>
      </Link>
    </>
  );

}