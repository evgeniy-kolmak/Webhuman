import styles from './Header.module.sass';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Navigation } from '../Navigation';
import { SocialLinks } from '../SocialLinks';
import { Button } from '../../Button';
import { useState, useEffect } from 'react';
import { Sidebar } from '../../Sidebar';

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { header, active, logo } = styles;
  const handleScroll = () => {
    setIsScroll(!!window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={[header, isScroll ? active : null].join(' ')}>
      <Logo className={logo} />
      <Navigation />
      <SocialLinks />
      <Button
        text="Скачать CV"
        cn={['download-cv', 'btn-ellipse']}
        download={true}
        href="/images/Resume(Evgeniy_Kolmak)-RU.pdf"
      />
      <Sidebar />
    </div>
  );
};
