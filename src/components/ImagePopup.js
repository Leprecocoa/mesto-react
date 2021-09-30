function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
