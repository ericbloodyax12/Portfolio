import React from 'react';

import "./headerMenu.scss"

type THeaderMenuProps = {}

export const HeaderMenu: React.FC<THeaderMenuProps> = (props) => {
    return (
        <nav>
            <ul className="header-menu__ul">
                <li><a href="">Home</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </nav>
    );
}

