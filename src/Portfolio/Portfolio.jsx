import './Portfolio.css'

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-wrapper">
          <h2 className="section-title">Портфолио</h2>
          <div className="portfolio-items">
            <div className="portfolio-item">
              <a className="item-link" href="#">
                <img className="item-img" src="" alt="" />
                <div className="portfolio-item-details">
                  <span className="item item-title">Lorem, ipsum dolor.</span>
                  <span className="item item-info">Lorem ipsum dolor sit amet consectetur.</span>
                </div>
              </a>
            </div>
            <div className="portfolio-item">
              <a className="item-link" href="#">
                <img className="item-img" src="" alt="" />
                <div className="portfolio-item-details">
                  <span className="item item-title">Lorem, ipsum dolor.</span>
                  <span className="item item-info">Lorem ipsum dolor sit amet consectetur.</span>
                </div>
              </a>
            </div>
            <div className="portfolio-item">
              <a className="item-link" href="#">
                <img className="item-img" src="" alt="" />
                <div className="portfolio-item-details">
                  <span className="item item-title">Lorem, ipsum dolor.</span>
                  <span className="item item-info">Lorem ipsum dolor sit amet consectetur.</span>
                </div>
              </a>
            </div>
          </div>
          <a className="btn portfolio-button" href="https://github.com/evgeniy-kolmak?tab=repositories" target='_blank'>Посмотреть проекты</a>
        </div>
      </div>
    </section>
  );
}