function Main(props) {
  return (
    <main className="main">
      {/* Profile section */}
      <section className="profile">
        <div className="profile__images">
          <button
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button page__button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button
          className="profile__addcard-button page__button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      {/* Elements section */}
      <section className="elements"></section>
    </main>
  );
}

export default Main;
