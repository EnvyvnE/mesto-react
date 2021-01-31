import React from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {
    const [isEditAvatarOpened, setIsEditAvatarOpened] = React.useState(false);
    const [isEditProfileOpened, setIsEditProfileOpened] = React.useState(false);
    const [isAddPlaceOpened, setIsAddPlaceOpened] = React.useState(false);
    const [isSubmitDeleteOpened, setIsSubmitDeleteOpened] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);



    function handleEditAvatarClick() {
        setIsEditAvatarOpened(true);
    }
    function handleEditProfileClick() {
        setIsEditProfileOpened(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlaceOpened(true);
    }
    function handleSubmitDeleteClick() {
        console.log('123')
        setIsSubmitDeleteOpened(true);
    }
    function closeAllPopups() {
        setIsEditAvatarOpened(false);
        setIsEditProfileOpened(false);
        setIsAddPlaceOpened(false);
        setSelectedCard(null);
        setIsSubmitDeleteOpened(false)
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }
    return (
        <>
            <div className="page">
                <Header />

                <PopupWithForm button='Сохранить' name='edit' title='Редактировать профиль' isOpened={isEditProfileOpened} onClose={closeAllPopups}>
                    <input placeholder="Имя" id="input-name" name='profileNameInput' className="popup__input-item popup__input-item_el_name" type="text"
                        required minLength="2" maxLength="40" />
                    <span id='input-name-error' className="error"></span>
                    <input placeholder="Вид деятельности" id='job-input' name='profileJobInput' className="popup__input-item popup__input-item_el_job" type="text"
                        required minLength="2" maxLength="40" />
                    <span id='job-input-error' className="error"></span>
                </PopupWithForm>
                <PopupWithForm button='Сохранить' name='add-card' title='Новое место' isOpened={isAddPlaceOpened} onClose={closeAllPopups}>
                    <input id="input-card-name" name='cardNameInput' className="popup__input-item popup__input-item_el_card-name"
                        type="text" placeholder="Название" required minLength="2" maxLength="30" />
                    <span id="input-card-name-error" className="error"></span>
                    <input id="input-link" name='cardLinkInput' className="popup__input-item popup__input-item_el_card-link" type="url"
                        placeholder="Ссылка на картинку" required />
                    <span id="input-link-error" className="error"></span>
                </PopupWithForm>
                <PopupWithForm button='Сохранить' name='profile-image' title='Обновить аватар' isOpened={isEditAvatarOpened} onClose={closeAllPopups}>
                    <input id="input-avatarLink" name='cardAvatarLinkInput' className="popup__input-item popup__input-item_el_avatar-link" type="url"
                        placeholder="https://somewebsite.com/someimage.jpg" required />
                    <span id="input-avatarLink-error" className="error"></span>

                </PopupWithForm>
                <PopupWithForm button='Да' name='submit' title='Вы уверены?' isOpened={isSubmitDeleteOpened} onClose={closeAllPopups}>

                </PopupWithForm>

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                <Main handleSubmitDeleteClick={handleSubmitDeleteClick} handleCardClick={handleCardClick} handleEditAvatarClick={handleEditAvatarClick} handleAddPlaceClick={handleAddPlaceClick} handleEditProfileClick={handleEditProfileClick} />
                <Footer />
            </div>
        </>
    );
}

export default App;
