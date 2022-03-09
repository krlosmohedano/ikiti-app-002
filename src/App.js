import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";

export default function Menu() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Navbar color="teal">
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>IKITI</NavbarBrand>
                    <NavbarToggler
                        color="white"
                        onClick={() => setOpenMenu(!openMenu)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openMenu}>
                    <Nav>
                        <NavItem active="light" ripple="light">Discover</NavItem>
                        <NavLink href="#navbar" ripple="light">Profile</NavLink>
                        <NavItem ripple="light">Settings</NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}