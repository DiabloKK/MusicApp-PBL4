import Button from "./Button";


const names = [
    {
        id: 1,
        name: "homeBtn",
        nameIcon: "fa-solid fa-house-user fa-2x"
    },
    {
        id: 2,
        name: "numberListBtn",
        nameIcon: "fa-sharp fa-solid fa-music fa-2x"
    },
    {
        id: 3,
        name: "musicSquareAddBtn",
        nameIcon: "fa-sharp fa-solid fa-headphones fa-2x"
    },
    {
        id: 4,
        name: "folderBtn",
        nameIcon: "fa-sharp fa-solid fa-folder fa-2x"
    }
]

function addButton(element) {
    return <Button key={element.id} name={element.name} nameIcon={element.nameIcon}/>
}

function Navigation() {
    return (
        <div id="navigation">
            {names.map(addButton)}
        </div>
    )
}

export default Navigation;