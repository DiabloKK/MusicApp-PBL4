import {addFile} from "../handle"

function Open() {
    return (
        <div id="Open">
            <button onClick={addFile}><i className="fa-solid fa-folder-open"></i>Add file(s)</button>
        </div>
    )
}

export default Open;