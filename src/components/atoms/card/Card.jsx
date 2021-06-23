import styled from "styled-components";

export const Card = (props) => {
    const { children } = props;
    return (
        <SCard>{children}</SCard>
    )
};

const SCard = styled.div`
    background-color: #fff;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 40%);
    border-radius: 8px;
    padding: 16px;
    margin-right: 16px;

    &:hover {
        box-shadow: none;
        transform: translate(5px, 5px);
        cursor: pointer;
    }
`