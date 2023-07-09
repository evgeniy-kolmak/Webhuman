import './App.sass';
import { Header } from './components/HeaderGroup/Header';
import { Main } from './components/MainGroup/Main';
import { About } from './components/AboutGroup/About';
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
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}
