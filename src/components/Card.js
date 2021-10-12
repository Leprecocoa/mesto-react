import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `page__button article__delete-button ${
    isOwn ? "article__delete-button_visible" : "article__delete-button_hidden"
  }`;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `article__like-button ${
    isLiked
      ? "article__like-button_state_active"
      : "article__like-button_state_unactive"
  }`;
  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }
  return (
    <article className="article">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="article__image"
        onClick={handleClick}
      />
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <div className="article__text">
        <h2 className="article__title">{props.card.name}</h2>
        <div className="article__likes">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="article__like-number">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Card;
