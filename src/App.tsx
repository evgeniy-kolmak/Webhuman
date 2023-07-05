import './App.sass';
import './Animation.css';
import { Header } from './components/HeaderGroup/Header';
import { Main } from './components/MainGroup/Main';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import './Responsive.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <AboutMe />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}
