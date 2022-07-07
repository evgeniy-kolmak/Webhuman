import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderHero from "./HeaderHero/HeaderHero";
import './Header.css'

export default function Header() {
  return (
    <header id="home" className="header">
      <div className="container">
        <div className="header-wrapper">
          <HeaderMain />
          <HeaderHero />
        </div>
      </div>
    </header>
  );

}