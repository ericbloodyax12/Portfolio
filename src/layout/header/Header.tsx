import React from 'react';

import "./header.scss"
import {HeaderLogo} from "./logo/HeaderLogo";
import {HeaderMenu} from "./menu/HeaderMenu";

type THeaderProps = {}

export const Header: React.FC<THeaderProps> = (props) => {
    return (
       <header className="header">
           <HeaderLogo />
           <HeaderMenu/>
       </header>
    );
}

