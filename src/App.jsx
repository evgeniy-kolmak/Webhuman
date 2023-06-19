import './App.css';
import './Animation.css';
import HeaderTop from './Header/HeaderTop';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Sidebar from './Header/Sidebar/Sidebar';
import './Responsive.css';
import { MyProvider } from './Context';

export default function App() {
  return (
    <div className="app" id="outer-container">
      <MyProvider>
        <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />
        <div id="page-wrap">
          <HeaderTop />
          <Header />
          <AboutMe />
          <Portfolio />
          <Contacts />
          <Footer />
        </div>
      </MyProvider>
    </div>
  );
}
