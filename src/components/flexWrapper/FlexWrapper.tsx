import React from 'react';

type TFlexWrapperProps = {
    display?: "flex"
    direction?: "row"  | "column" ;
    justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
    align?: "center" | "flex-start" | "flex-end" | "stretch";
    wrap?: boolean;
    children?: React.ReactNode;
}


export const FlexWrapper: React.FC<TFlexWrapperProps> = ({
                                                             display = "flex",
                                                             direction = "row",
                                                             justify="center",
                                                             wrap= false,
                                                             align="center",
                                                             children
}) => {
    const customStyle:React.CSSProperties = {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap ? "wrap" : "nowrap",
    };
    return (
        <div  style={customStyle}>
            {children}
        </div>
    );
}

