import { SectionTitle } from 'src/components/SectionTitle';
import styles from './Experience.module.sass';
import { ReactComponent as Typescript } from 'assets/tools_icons/typescript-bg.svg';
import { ReactComponent as React } from 'assets/tools_icons/react.svg';
import { ReactComponent as Javascript } from 'assets/tools_icons/javascript-bg.svg';
import { ReactComponent as Mui } from 'assets/tools_icons/mui.svg';
import { ReactComponent as Vue } from 'assets/tools_icons/vue.svg';
import { ReactComponent as Html } from 'assets/tools_icons/html5-bg.svg';
import { ReactComponent as Css } from 'assets/tools_icons/css3-bg.svg';

export type ExperienceProps = {};

export const Experience = ({}: ExperienceProps) => {
  const { experience } = styles;

  const coll = [
    {
      title: { position: 'Верстальщик', company: ' в cakeboost.com' },
      description:
        'Исправление недочетов в верстке, разработка новых компонентов проекта,  работа с Legacy кодом, рефакторинг кода c jQuery  на Vue.js.',
      worktime: '04.2023 - сейчас',
      iconPlace: '',
      iconTools: [
        { title: 'vue', icon: <Vue /> },
        { title: 'js', icon: <Javascript /> },
        { title: 'html', icon: <Html /> },
        { title: 'css', icon: <Css /> },
      ],
      cnPlace: styles['experience-timeline-event-layout'],
      cnIcon: styles['experience-timeline-icon-layout'],
      cnContent: styles['experience-timeline-content-layout'],
    },
    {
      title: {
        position: 'Фронтенд разработчик',
        company: ' в biplane.ru (Prufen)',
      },
      description:
        'Разработка клиентской части приложения (авторизованная и не авторизованная зона).',
      worktime: '02.2023 - сейчас',
      iconPlace: '',
      iconTools: [
        { title: 'ts', icon: <Typescript /> },
        { title: 'react', icon: <React /> },
        { title: 'mui', icon: <Mui /> },
      ],
      cnPlace: styles['experience-timeline-event-dev'],
      cnIcon: styles['experience-timeline-icon-dev'],
      cnContent: styles['experience-timeline-content-dev'],
    },
    {
      title: {
        position: 'Фронтенд разработчик',
        company: 'в freelance (kwork.ru)',
      },
      description:
        'Участие в разработке/доработке проектов на React.js, Typescript, нативный JavaScript, а так же верстка. ',
      worktime: '11.2022 - сейчас',
      iconPlace: '',
      iconTools: [
        { title: 'ts', icon: <Typescript /> },
        { title: 'react', icon: <React /> },
        { title: 'js', icon: <Javascript /> },
        { title: 'html', icon: <Html /> },
        { title: 'css', icon: <Css /> },
      ],
      cnPlace: styles['experience-timeline-event-dev'],
      cnIcon: styles['experience-timeline-icon-dev'],
      cnContent: styles['experience-timeline-content-dev'],
    },
  ];

  return (
    <section id="experience" className={experience}>
      <div className="container">
        <div className={styles['experience-wrapper']}>
          <SectionTitle>
            <h2>Опыт</h2>
          </SectionTitle>
          <p>Более одного года</p>
          <div className={styles['experience-timeline']}>
            {coll.map((item) => (
              <div
                key={item.title.company}
                className={[
                  styles['experience-timeline-event'],
                  item.cnPlace,
                ].join(' ')}
              >
                <div
                  className={[
                    styles['experience-timeline-icon'],
                    item.cnIcon,
                  ].join(' ')}
                >
                  <span>{item.worktime}</span>
                </div>
                <div
                  className={[
                    styles['experience-timeline-content'],
                    item.cnContent,
                  ].join(' ')}
                >
                  <div className={styles['experience-timeline-content-title']}>
                    <span>{item.title.position}</span>
                    <span>&nbsp;{item.title.company}</span>
                    <div>
                      {item.iconTools.map((item, i) => (
                        <span key={item.title}>{item.icon}</span>
                      ))}
                    </div>
                  </div>
                  <p
                    className={
                      styles['experience-timeline-content-description']
                    }
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
