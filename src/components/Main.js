function Main() {
  function handleEditAvatarClick() {
    document.querySelector(".popup-editavatar").classList.add("popup_opened");
  }
  function handleEditProfileClick() {
    document.querySelector(".popup-profile").classList.add("popup_opened");
  }
  function handleAddPlaceClick() {
    document.querySelector(".popup-addcard").classList.add("popup_opened");
  }
  return (
    <main className="main">
      {/* Profile section */}
      <section className="profile">
        <div className="profile__images">
          <button
            className="profile__avatar-edit"
            onClick={handleEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button page__button"
              type="button"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button
          className="profile__addcard-button page__button"
          type="button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      {/* Elements section */}
      <section className="elements"></section>
    </main>
  );
}

export default Main;
