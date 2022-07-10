import './Portfolio.css'

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-wrapper">
          <h2 className="section-title">Портфолио</h2>
          <div className="portfolio-items">
            <div className="portfolio-item portfolio-item--game">
              <a target='_blank' className="item-link" href="https://evgeniy-kolmak.github.io/cell-search/">
                <div className="portfolio-item-details">
                  <span className="item item-title">Интерактивная браузерная игра</span>
                  <span className="item item-info">Найдите 10 плиток за отведенное время.
                    Всего 1 минута, иначе игра будет закончена.</span>
                </div>
              </a>
            </div>
            <div className="portfolio-item portfolio-item--calculator">
              <a target='_blank' className="item-link" href="https://evgeniy-kolmak.github.io/salary-calculator/">
                <div className="portfolio-item-details">
                  <span className="item item-title">Локаничный калькулятор зарплаты</span>
                  <span className="item item-info">Надоело сидеть в неведении? Переживать? Ждать расчетный лист? Теперь можно посчитать самому.</span>
                </div>
              </a>
            </div>
            <div className="portfolio-item portfolio-item--site">
              <a target='_blank' className="item-link" href="https://evgeniy-kolmak.github.io/telegraph/">
                <div className="portfolio-item-details">
                  <span className="item item-title">Промо сайт</span>
                  <span className="item item-info">Одна из первых работ в верстке, но такая любимая. не возмонжо было не показать.</span>
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