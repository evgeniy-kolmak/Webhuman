import { SectionTitle } from 'src/components/SectionTitle';
import styles from './About.module.sass';

export type AboutProps = {};

export const About = ({}: AboutProps) => {
  const { about } = styles;
  const photo = [
    { src: 'images/about/photo-1.webp', alt: 'person-photo' },
    { src: 'images/about/photo-2.webp', alt: 'person-photo' },
    { src: 'images/about/photo-3.webp', alt: 'person-photo' },
  ];
  return (
    <section id="about" className={about}>
      <div className="container">
        <div className={styles['about-wrapper']}>
          <SectionTitle>
            <h2>Обо мне</h2>
          </SectionTitle>
          <div className={styles['about-circles']}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles['about-content']}>
            <div className={styles['about-content-photo']}>
              {photo.map((item) => (
                <div>
                  <img loading="lazy" src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
            <p>
              Всем снова привет! Итак, вы уже знаете, что меня зовут Евгений.
            </p>
            <p>
              Немного о себе: давно не студент, 30 лет, фрилансер, отзывчивая
              личность и порядочный семьянин. Я&nbsp;люблю творчество с детства
              и наслаждаюсь возможностью создавать что-то свое. В настоящее
              время живу в Минске, Беларусь.
            </p>
            <p>
              <strong>Почему&nbsp;программирование?</strong> Все элементарно -
              мне это нравится. Я&nbsp;верю, что это профессия будущего, которая
              позволяет мне обеспечить себя, свою семью и осуществить свою мечту
              - путешествовать. В данный момент я специализируюсь на
              веб-разработке, включая фронтенд и немного бэкенда.
            </p>
            <p>
              <strong>Почему вы должны выбрать меня?</strong> Каждому заказу
              я&nbsp;подхожу с большой ответственностью и любовью, так как я
              стремлюсь заявить о себе и исключить плагиат и халатность.
              Я&nbsp;полностью изучаю каждый проект, клиента и его целевую
              аудиторию, чтобы работать на высоком качестве. Я стараюсь сделать
              заказ максимально быстро и уникально, учитывая все правки и
              пожелания. Доверившись мне, вы получите максимальную отдачу от
              своего проекта и сэкономите нервы и время.
            </p>
            <p>
              Если я вам интересен, и вы хотите узнать что-то еще или
              воспользоваться моими услугами, я предоставлю все свои контакты
              ниже.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
