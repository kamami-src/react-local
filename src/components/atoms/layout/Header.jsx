import styled from 'styled-components';

export const Header = (props) => {
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
