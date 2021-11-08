import { useState } from "react"
import './Collapsible.css'

const Collapsible = (prop) => {
    const [isOpen, setIsOpen] = useState(false)

    // the animation is missing if using height = auto inside css file
    // and using scrollHeight like this code below is error
    // docuemnt cant find element by id parent
    // because the div didnt exist yet
    const scrollHeight = document.getElementById('parent').scrollHeight

    return (
        <div className="collapsible">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>{prop.label}</button>
            <div className="content-parent" id="parent">
                <div className="content">{prop.children}</div>
            </div>
        </div>
    )
}

export default Collapsible
