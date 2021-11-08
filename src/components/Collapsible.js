import { useState } from "react"
import './Collapsible.css'

const Collapsible = (prop) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapsible">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>{prop.label}</button>
            <div className={isOpen ? "content-parent show" : "content-parent"}>
                <div className="content">{prop.children}</div>
            </div>
        </div>
    )
}

export default Collapsible
