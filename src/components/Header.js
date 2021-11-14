import { useState } from "react"
import "./Header.css"


const Header = () => {
    const [headerWhite, setHeaderWhite] = useState(false)


    return (
        <header className={headerWhite ? "header header-white" : "header header-yellow"} onClick={() => setHeaderWhite(!headerWhite)}>
            <h1>Just Header.</h1>
        </header>
    )
}

export default Header
