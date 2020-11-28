import React from 'react'
import './Header.css';
function Header() {
    return (
        <header data-test="headerComponent" className="row">
            <h2 className="pad h2" data-test="logoText">ToDos</h2>
        </header>
    )
}

export default Header
