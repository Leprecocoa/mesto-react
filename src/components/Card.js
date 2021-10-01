function Card(props) {
  return (
    <article className="article">
      <img src={props.card.link} alt="Изображение" className="article__image" />
      <button
        className="article__delete-button page__button"
        type="button"
      ></button>
      <div className="article__text">
        <h2 className="article__title">{props.card.name}</h2>
        <div className="article__likes">
          <button className="article__like-button" type="button"></button>
          <span className="article__like-number">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Card;
