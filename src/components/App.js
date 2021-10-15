import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

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
  function handleUpdateUser(newUser) {
    api
      .sendProfileInfo(newUser)
      .then(setCurrentUser)
      .then(closeAllPopups)
      .catch((err) => console.log(err));
  }
  function handleUpdateAvatar(newAvatar) {
    api
      .editAvatar(newAvatar.avatar)
      .then(setCurrentUser)
      .then(closeAllPopups)
      .catch((err) => console.log(err));
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
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />
            {/* Popup edit profile avatar */}
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />
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
