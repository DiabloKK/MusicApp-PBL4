
function Button(props) {
    return (
        <div>
            <button className="button-navigation" id={props.name}><i className={props.nameIcon}></i></button>
        </div>
    )
}

export default Button;