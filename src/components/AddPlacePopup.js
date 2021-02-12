import PopupWithForm from './PopupWithForm';
import React from 'react';
function AddPlacePopup(props) {
    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e){
        e.preventDefault();
        props.onAddCard({
            cardNameInput: nameRef.current.value,
            cardLinkInput: linkRef.current.value
        });
    }
    return (
        <>
            <PopupWithForm onSubmit={handleSubmit} button='Сохранить' name='add-card' title='Новое место' isOpened={props.isOpened} onClose={props.onClose}>
                <input ref={nameRef} id="input-card-name" name='cardNameInput' className="popup__input-item popup__input-item_el_card-name"
                    type="text" placeholder="Название" required minLength="2" maxLength="30" />
                <span id="input-card-name-error" className="error"></span>
                <input ref={linkRef} id="input-link" name='cardLinkInput' className="popup__input-item popup__input-item_el_card-link" type="url"
                    placeholder="Ссылка на картинку" required />
                <span id="input-link-error" className="error"></span>
            </PopupWithForm>
        </>
    )
}
export default AddPlacePopup;