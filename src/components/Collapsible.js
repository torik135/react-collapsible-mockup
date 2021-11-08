import { useState, useRef } from "react"
import './Collapsible.css'

const Collapsible = (prop) => {
    const [isOpen, setIsOpen] = useState(false)

    // the animation is missing if using height = auto inside css file
    // and using scrollHeight like this code below is error
    // docuemnt cant find element by id parent
    // because the div didnt exist yet
    // const scrollHeight = document.getElementById('parent').scrollHeight

    const parentRef = useRef()

    // current  = value inside parentRef
    // which element use the parentRef
    // if (parentRef.current) console.log(parentRef.current.scrollHeight)

    return (
        <div className="collapsible">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>{prop.label}</button>
            <div
                className="content-parent"
                ref={parentRef}
                // if element is open
                // then height = content height (px)
                // else height = 0 px
                style={
                    isOpen ?
                        {
                            height: parentRef.current.scrollHeight + "px"
                        } : {
                            height: "0px"
                        }}
            >
                <div className="content">{prop.children}</div>
            </div>
        </div>
    )
}

export default Collapsible
