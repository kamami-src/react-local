import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MenuItem = (props) => {
    const { children, linkTo } = props;
    return (
        <SMenuLi><Link to={linkTo}>{children}</Link></SMenuLi>
    )
}

const SMenuLi = styled.li`
    margin-left: 10px;
`