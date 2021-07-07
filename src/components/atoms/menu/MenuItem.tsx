import styled from 'styled-components';
import { Link } from "react-router-dom";
import { VFC } from 'react';

type Props = {
    children: React.ReactNode;
    linkTo: string;
}
export const MenuItem: VFC<Props> = (props) => {
    const { children, linkTo } = props;
    return (
        <SMenuLi><Link to={linkTo}>{children}</Link></SMenuLi>
    )
}

const SMenuLi = styled.li`
    margin-left: 10px;
`