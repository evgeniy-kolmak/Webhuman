import styles from './Sidebar.module.sass';
import { useState } from 'react';
import { ReactComponent as Menu } from 'assets/menu.svg';
import { ReactComponent as Close } from 'assets/close.svg';
import { Navigation } from '../HeaderGroup/Navigation';
import { SectionTitle } from '../SectionTitle';
import { SocialLinks } from '../HeaderGroup/SocialLinks';
import { Button } from '../Button';

export type SidebarProps = {};
const { sidebar, overlay, menu, close } = styles;

export const Sidebar = ({}: SidebarProps) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleMenu = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <div className={sidebar}>
      <div onClick={handleMenu}>
        <div className={styles['menu-wrapper']}>
          <Menu className={menu} />
        </div>
        <div
          style={
            isOpenSidebar
              ? { opacity: 1, visibility: 'visible' }
              : { opacity: 0, visibility: 'hidden' }
          }
          className={overlay}
        ></div>
      </div>
      <div
        style={
          isOpenSidebar
            ? { marginRight: '0', visibility: 'visible' }
            : { marginRight: '-270px', visibility: 'hidden' }
        }
        className={styles['sidebar-wrapper']}
      >
        <div className={styles['sidebar-content']}>
          <Close onClick={handleMenu} className={close} />
          <SectionTitle>
            <span className={styles['sidebar-title']}>Меню</span>
          </SectionTitle>
          <Navigation
            handlePickItemMenu={handleMenu}
            cnLinks={styles['sidebar-links']}
            cnLink={styles['sidebar-link']}
          />
          <SocialLinks cn={styles['sidebar-social-links']} />
          <Button
            text="Скачать CV"
            cn={['download-cv', 'btn-ellipse', `${styles['sidebar-button']}`]}
            download={true}
            href="/images/Resume(Evgeniy_Kolmak)-RU.pdf"
          />
        </div>
      </div>
    </div>
  );
};
