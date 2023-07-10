import './App.sass';
import { Header } from './components/HeaderGroup/Header';
import { Main } from './components/MainGroup/Main';
import { About } from './components/AboutGroup/About';
import { Experience } from './components/ExperienceGroup/Experience';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import './Responsive.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}
