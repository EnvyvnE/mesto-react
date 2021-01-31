import api from '../utils/api';
import React from 'react';
import Card from './Card';
function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);



    React.useEffect(() => {
        api.getUserInfo()
            .then((initialUser) => {
                setUserName(initialUser.name);
                setUserDescription(initialUser.about);
                setUserAvatar(initialUser.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    React.useEffect(() => {
        api.getInitialCards()
            .then((initialCards => {
                const cards = initialCards.map(item => {
                    return {
                        id: item._id,
                        src: item.link,
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
                        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.handleEditAvatarClick}></div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" className="profile__edit-btn" onClick={props.handleEditProfileClick}></button>
                        </div>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                    <button type="button" className="profile__add-btn" onClick={props.handleAddPlaceClick}></button>
                </section>
                <section className="elements">
                    {cards.map(item => <Card handleSubmitDeleteClick={props.handleSubmitDeleteClick} handleCardClick={props.handleCardClick} key={item.id} {...item} />)}
                </section>
            </main>
        </>
    )

}
export default Main;