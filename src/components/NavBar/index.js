import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavBarElements";

const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/" >
                        Главная
                    </NavLink>
                    <NavLink to="/history" >
                        История
                    </NavLink>
                    <NavLink to="/places" activeStyle>
                        Места
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Афиша
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar;