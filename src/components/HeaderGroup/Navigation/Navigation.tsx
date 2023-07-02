import styles from './Navigation.module.sass';
import { Link } from 'react-scroll';

export type NavigationProps = {
  cnLinks?: string;
  cnLink?: string;
};

export const Navigation = ({ cnLinks, cnLink }: NavigationProps) => {
  const menuItems = [
    { title: 'Главная', link: 'main' },
    { title: 'Обо мне', link: 'about' },
    { title: 'Опыт', link: 'experience' },
    { title: 'Портфолио', link: 'portfolio' },
    { title: 'Контакты', link: 'contacts' },
  ];

  const { navigation, link, active } = styles;

  return (
    <ul className={[navigation, cnLinks].join(' ')}>
      {menuItems.map((item) => (
        <li className={cnLink} key={item.title}>
          <Link
            className={link}
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            activeClass={active}
            to={item.link}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
