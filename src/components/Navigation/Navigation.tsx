import styles from './Navigation.module.sass';

export const Navigation = () => {
  const menuItems = [
    { title: 'Главная' },
    { title: 'Обо мне' },
    { title: 'Портфолио' },
    { title: 'Контакты' },
  ];

  return (
    <ul className={styles.navigation}>
      {menuItems.map((item) => (
        <li key={item.title}>
          <a className={styles.link} href="#">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
