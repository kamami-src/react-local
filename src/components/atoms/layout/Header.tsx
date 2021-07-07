import { VFC } from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
}

export const Header: VFC<Props> = (props) => {
    const { children } = props;
    return (
        <SHeader>{children}</SHeader>
    );
};

const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;
