
function ItemMusic(props) {
    return (
        <div id="ItemMusic">
            <h3>{props.stt}</h3>
            <img src={props.src}></img>
            <div>
                <h2>{props.nameMusic}</h2>
                <span>{props.author}</span>
            </div>
            <p>{props.time}</p>
        </div>
    )
}

export default ItemMusic;