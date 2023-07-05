import { Link } from 'react-scroll';
import styles from './Main.module.sass';
import { ReactComponent as React } from 'assets/tools_icons/react.svg';
import { ReactComponent as Typescript } from 'assets/tools_icons/typescript.svg';
import { ReactComponent as Vue } from 'assets/tools_icons/vue.svg';
import { ReactComponent as Nodejs } from 'assets/tools_icons/nodejs.svg';

export type MainProps = {};

export const Main = ({}: MainProps) => {
  const toolsIcon = [
    { name: 'typescript', icon: <Typescript /> },
    { name: 'react', icon: <React /> },
    { name: 'vue', icon: <Vue /> },
    { name: 'nodejs', icon: <Nodejs /> },
  ];

  const { main, tools, tool } = styles;
  return (
    <main id="main" className={main}>
      <div className="container">
        <div className={styles['main-wrapper']}>
          <div className={styles['main-content']}>
            <div>
              <span>Привет</span>
              <ul>
                <li>мир !</li>
                <li>тебе !</li>
                <li>юзер !</li>
                <li>всем !</li>
              </ul>
            </div>
            <h1>Я Евгений Колмак</h1>
            <p>
              Открыл для себя разработку веб-приложений несколько лет назад.
              Специализируюсь в основном во фронтенде и немного бэкенда.
            </p>
            <p>
              Готов&nbsp;воплотить ваши идеи в стильный и функциональный
              веб-сайт, который привлечет внимание и удовлетворит потребности
              вашей целевой аудитории.
            </p>
            <Link
              className={styles['main-content-button']}
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
            >
              Связаться
            </Link>
          </div>
          <div className={styles['main-person']}>
            <div className={styles['main-person-circle']}>
              <img src="assets/person/main.webp" alt="person" loading="lazy" />
            </div>
            <div className={tools}>
              {toolsIcon.map((item) => (
                <div className={tool} key={item.name}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
