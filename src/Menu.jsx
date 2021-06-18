import { Link } from "react-router-dom";
import styled from 'styled-components';

const SMenu = styled.nav`
    display: flex;
    color : inherit;
    text-decoration : none;
`;

export const Menu = () => {
    return (
        <SMenu>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/diary">diary</Link>
                <Link to="/contact">contact</Link>
            </ul>
        </SMenu>
    );
};
