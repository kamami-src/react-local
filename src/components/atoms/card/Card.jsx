import styled from "styled-components";

export const Card = (props) => {
    const { children, onClick } = props;
    return (
        <SCard onClick={onClick}>{children}</SCard>
    )
};

const SCard = styled.div`
    background-color: #fff;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 40%);
    border-radius: 8px;
    padding: 16px;
    margin-right: 16px;
    margin-bottom: 16px;

    &:hover {
        box-shadow: none;
        transform: translate(5px, 5px);
        cursor: pointer;
    }
`