import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({ name, link });
  }
  return (
    <PopupWithForm
      name="addcard"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
        />
        <div className="popup__error">
          <span className="popup__error-span" id="place-name-error"></span>
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
          value={link}
          onChange={handleLinkChange}
        />
        <div className="popup__error">
          <span className="popup__error-span" id="image-source-error"></span>
        </div>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
