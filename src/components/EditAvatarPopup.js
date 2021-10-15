import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="editavatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_value_avatar-link"
          name="avatar-link"
          placeholder="Ссылка на картинку"
          required
          type="url"
          id="avatar-link"
          ref={inputRef}
        />
        <div className="popup__error">
          <span className="popup__error-span" id="avatar-link-error"></span>
        </div>
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
