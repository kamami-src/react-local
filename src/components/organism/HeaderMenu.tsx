import { VFC } from "react";
import { Link } from "react-router-dom";

import { MenuList } from "../molecules/MenuList";
import { Header } from "../atoms/layout/Header";

export const HeaderMenu: VFC = () => {
    return (
        <Header>
            <div className="title"><Link to="/">homePage(kari)</Link></div>
            <MenuList />
        </Header>
    );
};
