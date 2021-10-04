import React from "react";
import Card from "./Card";
import { api } from "../utils/api.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, cards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      {/* Profile section */}
      <section className="profile">
        <div
          className="profile__images"
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <button
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button page__button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
