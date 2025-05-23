import "./card.css";

export default function Card({ element }) {
  return (
    <>
      <div className={element.class}>
        <div className="card__box-img">
          <img src={element.img} className="card-img" alt="character" />
        </div>
        <div className="card__box-title">
          <h2 className="card-title">{element.name}</h2>
          <h4 className="card-version">{element.version}</h4>
        </div>
        <div className="card__box-text">
          <p className="card-type">Редкость: {element.rare}</p>
          <p className="card-elem">Способность: {element.element}</p>
          <p className="card-rare">Класс: {element.type}</p>
        </div>
        <div className="card__box-indicators">
          <div className="card-indicator" id="strength">
            {element.strength}
          </div>
          <div className="card-indicator" id="health">
            {element.health}
          </div>
          <div className="card-indicator" id="rating">
            <p>
              {Math.floor(
                (element.strength +
                  element.health +
                  element.speed +
                  element.mind) /
                  4
              )}
            </p>
          </div>
          <div className="card-indicator" id="speed">
            {element.speed}
          </div>
          <div className="card-indicator" id="mind">
            {element.mind}
          </div>
        </div>
      </div>
    </>
  );
}
