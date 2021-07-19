import { VFC } from 'react';
import styled from 'styled-components';

export const Footer: VFC = () => {
    return (
        <SFooter>&copy; nico-chan inc.</SFooter>
    );
};

const SFooter = styled.footer`
    margin: 20px;
    bottom: 0;
    text-align: center;
`;
