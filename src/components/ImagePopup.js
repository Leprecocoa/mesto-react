function ImagePopup(props) {
  const { link, name } = props.card || {};
  return (
    <div className={`image-popup popup ${props.card && "popup_opened"}`}>
      <div className="image-popup__container">
        <button
          className="page__button image-popup__close popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img src={link} alt={name} className="image-popup__image" />
        <p className="image-popup__title">{name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
