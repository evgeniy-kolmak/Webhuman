import './App.css';
import './Animation.css';
import HeaderTop from './Header/HeaderTop';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import React from 'react';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import './Responsive.css';


export default function App() {
  return (
    <div className="app" id="outer-container">
      <HeaderTop />
      <Header />
      <AboutMe />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}


