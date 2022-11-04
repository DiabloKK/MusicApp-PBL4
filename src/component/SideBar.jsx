import Button from "./Button";
import Navigation from "./Navigation";

function SideBar() {
    return (
        <div id="sideBar">
            <i id="logo" className="fa-sharp fa-solid fa-khanda fa-3x"></i>
            <Navigation />
            < Button 
                name = "settingBtn"
                nameIcon = "fa-solid fa-gear fa-2x"
             />
        </div>
    )
}

export default SideBar;