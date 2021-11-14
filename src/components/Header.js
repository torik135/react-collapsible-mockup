import { useState } from "react"
import "./Header.css"


const Header = () => {
    const [headerWhite, setHeaderWhite] = useState(false)


    return (
        <header className={headerWhite ? "header header-white" : "header header-yellow"} onClick={() => setHeaderWhite(!headerWhite)}>
            <h1>Just Header.</h1>
            <h4>click the 4 square bellow to open the collapsible</h4>
            {/* change to open to close w/ useState */}
        </header>
    )
}

export default Header
