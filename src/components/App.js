import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    api.getUserInfo().then((userInfo) => {
      setCurrentUser(userInfo);
    });
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <div className="page">
            {/* Header */}
            <Header />
            {/* Main content */}
            <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
            />
            {/* Footer */}
            <Footer />
            {/* Popup profile */}
            <PopupWithForm
              name="profile"
              title="Редактировать профиль"
              buttonText="Сохранить"
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
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
            </PopupWithForm>
            {/* Popup edit profile avatar */}
            <PopupWithForm
              name="editavatar"
              title="Обновить аватар"
              buttonText="Сохранить"
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
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
            </PopupWithForm>
            {/* Add card popup */}
            <PopupWithForm
              name="addcard"
              title="Новое место"
              buttonText="Создать"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
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
            </PopupWithForm>
            {/* Delete card popup */}
            <PopupWithForm
              name="deletecard"
              title="Вы уверены?"
              buttonText="Да"
            ></PopupWithForm>
            {/* Image popup */}
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
