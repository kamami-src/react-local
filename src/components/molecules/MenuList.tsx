import { VFC } from 'react';
import styled from 'styled-components';
import { MenuItem } from "../atoms/menu/MenuItem";

export const MenuList: VFC = () => {
    return (
            <SMenuNav>
                <SMenuUl>
                    <MenuItem linkTo="/profile">profile</MenuItem>
                    <MenuItem linkTo="/diary">diary</MenuItem>
                    <MenuItem linkTo="/contact">contact</MenuItem>
                </SMenuUl>
            </SMenuNav>
    );
};

const SMenuNav = styled.nav`
    display: flex;
    color : inherit;
    text-decoration : none;
`;

const SMenuUl = styled.ul`
    display: flex;
`;