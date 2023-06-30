import './App.sass';
import './Animation.css';
import { Header as Header1 } from './components/HeaderGroup/Header';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import './Responsive.css';
import  Header from './Header/Header'


export default function App() {
  return (
    <div className='app'>
          <Header1 />
          <Header/>
          <AboutMe />
          <Portfolio />
          <Contacts />
          <Footer />
    </div>
  );
}
