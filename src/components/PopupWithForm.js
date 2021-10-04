function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${props.isOpen && "popup_opened"}`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button
          className="popup__close page__button popup__close_type_profile"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          action="#"
          className={`popup__form popup__form_type_${props.name}`}
          name={props.name}
        >
          {props.children}
          <button className="popup__submit" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
