import React from 'react'
import { NavLink} from "react-react-dom";
import styled from 'styled-components';

const Navbar = () => {
    return (
    <Nav>
        <NavContainer>
            <NavLogo>Logo</NavLogo>
            <MobileIcon></MobileIcon>
            <NavItems>
                <NavLink>Home</NavLink>
            </NavItems>
            <ButtonContainer>
                <GithubButton>Github Profile</GithubButton>
            </ButtonContainer>
        </NavContainer>
    </Nav>
    );
};    

export default Navbar;

// 15min39