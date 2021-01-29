function Main(props){

    function handleEditAvatarClick(){
        document.querySelector('.popup_type_profile-image').classList.add('popup_opened');
    }
    function handleEditProfileClick(){
        document.querySelector('.popup_type_edit').classList.add('popup_opened');

    }
    function handleAddPlaceClick(){
        document.querySelector('.popup_type_add-card').classList.add('popup_opened');
    }
    return(
        <>
         <main className="main">
        <section className="profile">
            <div className="profile__image">
                <div className="profile__pencil"></div>
                <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
            </div>
            <div className="profile__info">
                <div className="profile__title">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__edit-btn" onClick ={handleEditProfileClick}></button>
                </div>
                <p className="profile__job">Исследователь океана</p>
            </div>

            <button type="button" className="profile__add-btn" onClick ={handleAddPlaceClick}></button>

        </section>
        <section className="elements">

        </section>
    </main>
        </>
    )

}
export default Main;