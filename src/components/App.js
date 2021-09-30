import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="root">
        <div className="page">
          {/* Header */}
          <Header />
          {/* Main content */}
          <Main />
          {/* Footer */}
          <Footer />
          {/* Popup profile */}
          <div className="popup popup-profile">
            <div className="popup__container">
              <h2 className="popup__title">Редактировать профиль</h2>
              <button
                className="popup__close page__button popup__close_type_profile"
                type="button"
              ></button>
              <form
                action="#"
                className="popup__form popup__form_type_profile"
                name="popup"
                noValidate
              >
                <label className="popup__label">
                  <input
                    className="popup__input popup__input_value_name"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    required
                    minLength="2"
                    maxLength="40"
                    id="profile-name"
                  />
                  <div className="popup__error">
                    <span
                      className="popup__error-span"
                      id="profile-name-error"
                    ></span>
                  </div>
                </label>
                <label className="popup__label">
                  <input
                    className="popup__input popup__input_value_about"
                    type="text"
                    name="about"
                    placeholder="О себе"
                    required
                    minLength="2"
                    maxLength="200"
                    id="profile-about"
                  />
                  <div className="popup__error">
                    <span
                      className="popup__error-span"
                      id="profile-about-error"
                    ></span>
                  </div>
                </label>
                <button className="popup__submit" type="submit">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
          {/* Popup edit profile avatar */}
          <div className="popup popup-editavatar">
            <div className="popup__container">
              <h2 className="popup__title">Обновить аватар</h2>
              <button
                className="popup__close page__button popup__close_type_editavatar"
                type="button"
              ></button>
              <form
                action="#"
                className="popup__form popup__form_type_editavatar"
                name="edit-avatar"
                noValidate
              >
                <label className="popup__label">
                  <input
                    className="popup__input popup__input_value_avatar-link"
                    name="avatar-link"
                    placeholder="Ссылка на картинку"
                    required
                    type="url"
                    id="avatar-link"
                  />
                  <div className="popup__error">
                    <span
                      className="popup__error-span"
                      id="avatar-link-error"
                    ></span>
                  </div>
                </label>
                <button className="popup__submit" type="submit">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
          {/* Add card popup */}
          <div className="popup popup-addcard">
            <div className="popup__container">
              <h2 className="popup__title">Новое место</h2>
              <button
                className="popup__close page__button popup__close_type_addcard"
                type="button"
              ></button>
              <form
                action="#"
                className="popup__form popup__form_type_addcard"
                name="addcard"
                noValidate
              >
                <label className="popup__label">
                  <input
                    className="popup__input popup__input_value_place-name"
                    type="text"
                    name="place-name"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    id="place-name"
                  />
                  <div className="popup__error">
                    <span
                      className="popup__error-span"
                      id="place-name-error"
                    ></span>
                  </div>
                </label>
                <label className="popup__label">
                  <input
                    className="popup__input popup__input_value_image-source"
                    type="url"
                    name="image-source"
                    placeholder="Ссылка на картинку"
                    required
                    id="image-source"
                  />
                  <div className="popup__error">
                    <span
                      className="popup__error-span"
                      id="image-source-error"
                    ></span>
                  </div>
                </label>
                <button
                  className="popup__submit popup__submit_disabled"
                  type="submit"
                >
                  Создать
                </button>
              </form>
            </div>
          </div>
          {/* Delete card popup */}
          <div className="popup popup-deletecard">
            <div className="popup__container">
              <h2 className="popup__title">Вы уверены?</h2>
              <button
                className="popup__close page__button popup__close_type_deletecard"
                type="button"
              ></button>
              <form
                action="#"
                className="popup__form popup__form_type_deletecard"
                name="deletecard"
                noValidate
              >
                <button className="popup__submit" type="submit">
                  Да
                </button>
              </form>
            </div>
          </div>
          {/* Image popup */}
          <div className="image-popup popup">
            <div className="image-popup__container">
              <button
                className="page__button image-popup__close popup__close"
                type="button"
              ></button>
              <img src="#" alt="Изображение" className="image-popup__image" />
              <p className="image-popup__title"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
