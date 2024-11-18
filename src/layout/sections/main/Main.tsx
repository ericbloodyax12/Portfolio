import React from 'react';

import avatar from "../../../assets/imgs/avatar.png"

import "./main.scss"
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";

type TMainProps = {}

export const Main: React.FC<TMainProps> = (props) => {
    return (
        <div className="main">
            <FlexWrapper justify="space-around">
                <div>
                    <span>Hi there!</span>
                    <h2>I am Eric Barsegyan</h2>
                    <h1>A Front end Web Developer</h1>
                </div>
                <img className="main-div__imgAvatar" src={avatar}/>
            </FlexWrapper>
        </div>
    );
}

