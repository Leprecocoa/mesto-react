import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
        />
        <div className="popup__error">
          <span className="popup__error-span" id="profile-name-error"></span>
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
          value={description}
          onChange={handleDescriptionChange}
        />
        <div className="popup__error">
          <span className="popup__error-span" id="profile-about-error"></span>
        </div>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
