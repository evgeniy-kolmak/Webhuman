import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="message-wrapper">
            <img className='duck' src="/images/duck.png" alt="" />
            <div className="message">
              <span className="message-title">Остались вопросы? Спроси в чате!</span>
            </div>
          </div>
          <iframe src="https://tgwidget.com/widget/btn/?id=62c9af0ed56c1946ac0ab377" frameBorder="0" scrolling="no" horizontalscrolling="no" verticalscrolling="no" width="250px" height="50px" async></iframe>
          <span className="copyright">
            <svg className="footer-logo">
              <use href="/images/sprite.svg#logo"></use>
            </svg>
            Copyright © 2020-2022, Webhuman
          </span>
        </div>
      </div>
    </footer>
  );
}