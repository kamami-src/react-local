import { VFC } from 'react';
import styled from 'styled-components';

export const Footer: VFC = () => {
    return (
        <SFooter>&copy; nico-chan inc.</SFooter>
    );
};

const SFooter = styled.footer`
    margin: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
`;
