import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <svg className="footer-logo">
            <use href="/images/sprite.svg#logo"></use>
          </svg>
          <span className="copyright">Copyright © 2020-2022, Webhuman</span>
        </div>
      </div>
    </footer>
  );
}