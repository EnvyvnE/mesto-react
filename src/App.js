import closeBtn from './images/close.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
function App() {
  return (
    <>
    <div className="page">
<Header />

<PopupWithForm name='edit' title='Редактировать профиль'>
            <input placeholder="Имя" id="input-name" name='profileNameInput' className="popup__input-item popup__input-item_el_name" type="text"
                 required minLength="2" maxLength="40"/>
            <span id='input-name-error' className="error"></span>
            <input placeholder="Вид деятельности" id='job-input' name='profileJobInput' className="popup__input-item popup__input-item_el_job" type="text"
                 required minLength="2" maxLength="40"/>
            <span id='job-input-error' className="error"></span>
</PopupWithForm>
<PopupWithForm name='add-card' title='Новое место'>
            <input id="input-card-name" name='cardNameInput' className="popup__input-item popup__input-item_el_card-name"
                type="text" placeholder="Название"  required minLength="2" maxLength="30"/>
            <span id="input-card-name-error" className="error"></span>
            <input id="input-link" name='cardLinkInput' className="popup__input-item popup__input-item_el_card-link" type="url"
                placeholder="Ссылка на картинку"  required/>
            <span id="input-link-error" className="error"></span>
</PopupWithForm>
<PopupWithForm name='profile-image' title='Обновить аватар'>
            <input id="input-avatarLink" name='cardAvatarLinkInput' className="popup__input-item popup__input-item_el_avatar-link" type="url"
                placeholder="https://somewebsite.com/someimage.jpg"  required/>
            <span id="input-avatarLink-error" className="error"></span>

</PopupWithForm>
    <section className="popup popup_type_submit">
        <form className="popup__container" >
            <h3 className="popup__heading">Вы уверены?</h3>
            <button className="popup__button popup__button_submit" type="submit">Да</button>
            <button className="popup__button popup__button_close" type="reset"><img className="popup__close-image"
                    src={closeBtn}  alt="закрыть форму" /></button>
        </form>
    </section>
    <section className="popup popup_type_image-card">
        <div className="popup__container-image">
            <img className="popup__image" src="#" alt="alternative text" />
            <p className="popup__title"></p>
            <button className="popup__button popup__button_close" type="reset"><img className="popup__close-image"
                    src={closeBtn}  alt="закрыть форму"/></button>
        </div>
    </section>
<Main />   
 <Footer />
    <template id="element">
        <div className="element">
           <img className="element__image" src="#" alt="alternative text " />
            <button type="button" className="element__trash"></button>
            <div className="element__info">
                <h2 className="element__place"></h2>
                <div className="element__like-div">
                    <button type="button" className="element__like"></button>
                    <p className="element__counter">1</p>

                </div>
                
                
            </div>
        </div>
    </template> 
    </div>
    </>
  );
}

export default App;
