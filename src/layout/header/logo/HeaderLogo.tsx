import React from 'react';
import {Icon} from "../../../components/icon/Icon";

type THeaderLogoProps = {}

export const HeaderLogo: React.FC<THeaderLogoProps> = (props) => {
    return (
        <a href={""}>
            <Icon iconId="logoSvg" width="60px" height="60px" viewBox="0 0 1024  1024" />
        </a>
    );
}


