import React from 'react';

import skillsIcon from "../../assets/svgs/skillsSvg/skillsIcons.svg"
import "./icon.scss"

type TIconProps = {
    iconId: "htmlSvg"   |
            "jsSvg"     |
            "tsSvg"     |
            "reactSvg"  |
            "sassSvg"   |
            "logoSvg"   |
            "gitSvg"    |
            "mobxSvg"
    ;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon: React.FC<TIconProps> = ({
                                               iconId,
                                               width= "120",
                                               height ="120",
                                               viewBox = `0 0 ${width} ${height}`
                                           }) => {
    return (
        <div>
            <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${skillsIcon}#${iconId}`}/>  /* # указывает, ссылку на элемент с определённым id внутри SVG-файла*/
            </svg>
        </div>
);
}

