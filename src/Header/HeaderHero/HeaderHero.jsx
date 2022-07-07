import './HeaderHero.css'

export default function HeaderHero() {
  return (

    <div className="hero">
      <div className="set-background">
        <img className="hero-image" src="images/hero/hero.png" alt="img:Hero" />
      </div>
      <svg className="hard-skills sass">
        <use href="/images/sprite.svg#sass"></use>
      </svg>
      <svg className="hard-skills figma">
        <use href="/images/sprite.svg#figma"></use>
      </svg>
      <svg className="hard-skills js">
        <use href="/images/sprite.svg#js"></use>
      </svg>
      <svg className="hard-skills react">
        <use href="/images/sprite.svg#react"></use>
      </svg>
    </div>

  );
}