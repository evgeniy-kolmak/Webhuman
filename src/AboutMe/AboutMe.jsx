import './AboutMe.css'

export default function AboutMe() {
  return (
    <section id="about" className="about-me">
      <div className="container">
        <div className="about-wrapper">
          <h2 className="section-title">Обо мне</h2>
          <span className="set-white"></span>
          <span className="set-yellow"></span>
          <span className="set-blue"></span>
          <img className=" about-me-photo about-me-photo--1" src="/images/about/photo-1.webp" alt="photo: photo-face" />
          <img className=" about-me-photo about-me-photo--2" src="/images/about/photo-2.webp" alt="photo: photo-face" />
          <img className=" about-me-photo about-me-photo--3" src="/images/about/photo-3.webp" alt="photo: photo-face" />
          <p className="about-me-information">
            Всем снова привет! Итак, вы уже знаете, что меня зовут Евгений. Немного о себе: давно не студент, 29 лет,
            фрилансер,
            отзывчивая личность и порядочный семьянин, творчество люблю с детства, а так же творить что-то свое, живу в
            Минске,
            Беларусь. Почему программирование? Все элементарно - мне это нравится, профессия будущего, благодаря которой
            я могу
            обеспечить себя, свою семью, а так же и осуществить свою мечту - путешествия, на данный момент я
            специализируюсь на
            веб-разработке ( front-end и немного back-end ) , сайтах под ключ. Почему вы должены выбрать меня? К каждому
            заказу подхожу с
            большой ответственностью и любовью, так как хочу заявить о себе, исключить плагиат и халатность, полностью
            изучить
            проект, клиента и его целевую аудиторию, работать на качество, стараясь сделать заказ максимально быстро и
            уникально, по
            возможности с учетом всех правок и пожеланий. Доверившись мне, вы получите максимальную отдачу от своего
            проекта,
            сэкономите нервы и время. Если я вам интересен, вы хотите узнать что-то еще или воспользоваться моими
            услугами, то я
            предоставлю все свои контакты ниже.</p>
        </div>
      </div>
    </section >
  );
}
