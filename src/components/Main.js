import api from '../utils/api';
import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';
function Main(props) {

    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card){ // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          // Обновляем стейт
          setCards(newCards);
        })
        .catch((err)=>{
            console.log(err);
        });
        }
       function handleCardDelete(card){
           const isOwn = card.owner._id === currentUser._id;
           
       } 
    React.useEffect(() => {
        api.getInitialCards()
            .then((initialCards => {
                const cards = initialCards.map(item => {
                    return {
                        _id: item._id,
                        link: item.link,
                        name: item.name,
                        likes: item.likes
                    }
                })
                setCards(cards);
            }))
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <main className="main">
                <section className="profile">
                    <div className="profile__image">
                        <div className="profile__pencil"></div>
                        <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} onClick={props.handleEditAvatarClick}></div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button type="button" className="profile__edit-btn" onClick={props.handleEditProfileClick}></button>
                        </div>
                        <p className="profile__job">{currentUser.about}</p>
                    </div>
                    <button type="button" className="profile__add-btn" onClick={props.handleAddPlaceClick}></button>
                </section>
                <section className="elements">
                    {cards.map(item => <Card onCardLike ={handleCardLike} card = {item} handleSubmitDeleteClick={props.handleSubmitDeleteClick} handleCardClick={props.handleCardClick} key={item._id} {...item}/>)}
                </section>
            </main>
        </>
    )

}
export default Main;