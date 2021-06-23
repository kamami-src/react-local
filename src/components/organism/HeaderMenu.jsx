import { Link } from "react-router-dom";
import styled from 'styled-components';
import { MenuList } from "../molecules/MenuList";
import { Header } from "../atoms/layout/Header";

export const HeaderMenu = () => {
    return (
        <Header>
            <div class="title"><Link to="/">homePage(kari)</Link></div>
            <MenuList />
        </Header>
    );
};
