import React from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../context/CurrentUserContext';
function App() {
    const [isEditAvatarOpened, setIsEditAvatarOpened] = React.useState(false);
    const [isEditProfileOpened, setIsEditProfileOpened] = React.useState(false);
    const [isAddPlaceOpened, setIsAddPlaceOpened] = React.useState(false);
    const [isSubmitDeleteOpened, setIsSubmitDeleteOpened] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currenUser, setCurrentUserInfo] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        api.getUserInfo()
            .then((currentUser) => {
                setCurrentUserInfo(currentUser);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


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
    function handleUpdateUser(data){
        api.patchUserInfo(data)
        .then((currentUser) => {
            setCurrentUserInfo(currentUser);
            closeAllPopups();
        })

    }
    function handleUpdateAvatar(data){
        api.patchAvatar(data)
        .then((currentUser) => {
            setCurrentUserInfo(currentUser);
            closeAllPopups();
        })
    }
    function handleAddCard(data){
        api.postNewCard(data)
        .then((newCard) => {
            setCards([newCard, ...cards]); 
            closeAllPopups();
        })
    }
    const [cards, setCards] = React.useState([]);
    function handleCardLike(card){ 
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch((err)=>{
            console.log(err);
        });
        }
       function handleCardDelete(card){
           api.removeCard(card._id)
           .then( () => {
            const newCards = cards.filter((c) => {
                return c._id !== card._id
            })
            setCards(newCards);
          })
          .catch((err)=>{
              console.log(err);
          });
       } 
    React.useEffect(() => {
        api.getInitialCards()
            .then((initialCards => {
                const cards = initialCards.map(item => {
                    return {
                        _id: item._id,
                        link: item.link,
                        name: item.name,
                        likes: item.likes,
                        owner: item.owner
                    }
                })
                setCards(cards);
            }))
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    return (
        <CurrentUserContext.Provider value={currenUser}>
            <div className="page">
                <Header />

               <EditProfilePopup onUpdateUser={handleUpdateUser} isOpened ={isEditProfileOpened} onClose={closeAllPopups}/>
                <AddPlacePopup onAddCard={handleAddCard} isOpened={isAddPlaceOpened} onClose={closeAllPopups} />
                <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpened={isEditAvatarOpened} onClose={closeAllPopups} />
                <PopupWithForm button='Да' name='submit' title='Вы уверены?' isOpened={isSubmitDeleteOpened} onClose={closeAllPopups}>

                </PopupWithForm>

                <ImagePopup  card={selectedCard} onClose={closeAllPopups} />
                <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} handleSubmitDeleteClick={handleSubmitDeleteClick} handleCardClick={handleCardClick} handleEditAvatarClick={handleEditAvatarClick} handleAddPlaceClick={handleAddPlaceClick} handleEditProfileClick={handleEditProfileClick} />
                <Footer />
            </div>
            </CurrentUserContext.Provider>
    );
}

export default App;
