import { Link } from "react-router-dom";
import styled from 'styled-components';

export const TitleMenu = () => {
    return (
        <SHeader>
            <div class="title"><Link to="/">homePage(kari)</Link></div>
            <SMenuNav>
                <SMenuUl>
                    <SMenuLi><Link to="/profile">profile</Link></SMenuLi>
                    <SMenuLi><Link to="/diary">diary</Link></SMenuLi>
                    <SMenuLi><Link to="/contact">contact</Link></SMenuLi>
                </SMenuUl>
            </SMenuNav>
        </SHeader>
    );
};

const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;

const SMenuNav = styled.nav`
    display: flex;
    color : inherit;
    text-decoration : none;
`;

const SMenuUl = styled.ul`
    display: flex;
`;

const SMenuLi = styled.li`
    margin-left: 10px;
`