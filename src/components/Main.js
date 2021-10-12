import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .sendLikes(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    } else {
      api
        .deleteLikes(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(
      setCards((state) =>
        state.filter((el) => {
          return el._id !== card._id;
        })
      )
    );
  }

  return (
    <main className="main">
      {/* Profile section */}
      <section className="profile">
        <div
          className="profile__images"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <button
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-button page__button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__addcard-button page__button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      {/* Elements section */}
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
