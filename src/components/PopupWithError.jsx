function PopupWithError(props) {
  const error = props.error;
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{error !== null ? error.title : ""}</h2>
        <p className="popup__text">{error !== null ? error.text : ""}</p>
        <button
          type="button"
          className="button-icon button-icon_action_close"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default PopupWithError;
