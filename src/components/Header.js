import React, { useState } from "react";
// data
import { headerData } from "../utils/data";
// styles
import {
    NavStyle,
    ContainerULStyle,
    ListStyle,
    Img,
} from "./Styles/Nav.Styles";

const Header = () => {
    const [menuState, setMenuState] = useState(
        headerData.menu.map((item, index) => ({
            ...item,
            currentPage: index === 0 ? true : false,
        }))
    );

    const handleClick = (id) => {
        const newState = menuState.map((item, index) =>
            index === id
                ? { ...item, currentPage: true }
                : { ...item, currentPage: false }
        );
        setMenuState(newState);
    };

    return (
        <NavStyle>
            <ContainerULStyle>
                {menuState.map((item, index) => (
                    <ListStyle
                        onClick={() => handleClick(index)}
                        selected={item.currentPage}
                        key={index}
                    >
                        {item.title}
                    </ListStyle>
                ))}
                <Img src={headerData.avatar.source} alt="avatar-img" />
            </ContainerULStyle>
        </NavStyle>
    );
};

export default Header;
