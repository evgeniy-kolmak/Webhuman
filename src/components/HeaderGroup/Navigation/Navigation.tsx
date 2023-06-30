import styles from './Navigation.module.sass';

export type NavigationProps = {
  cnLinks?: string;
  cnLink?: string;
};

export const Navigation = ({ cnLinks, cnLink }: NavigationProps) => {
  const menuItems = [
    { title: 'Главная' },
    { title: 'Обо мне' },
    { title: 'Опыт' },
    { title: 'Портфолио' },
    { title: 'Контакты' },
  ];

  const { navigation, link } = styles;

  return (
    <ul className={[navigation, cnLinks].join(' ')}>
      {menuItems.map((item) => (
        <li className={cnLink} key={item.title}>
          <a className={link} href="#">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
