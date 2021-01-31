function Card(props) {
    function onCardClick() {
        props.handleCardClick(props)
    }
    function onDeleteClick() {
        props.handleSubmitDeleteClick(props);
    }
    return (
        <div className="element" >
            <img className="element__image" src={props.src} alt={props.name} onClick={onCardClick} />
            <button type="button" className="element__trash" onClick={onDeleteClick}></button>
            <div className="element__info">
                <h2 className="element__place">{props.name}</h2>
                <div className="element__like-div">
                    <button type="button" className="element__like"></button>
                    <p className="element__counter">{props.likes.length}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;