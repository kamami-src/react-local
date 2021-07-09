import styled from "styled-components";

export const BaseButtonStyle = styled.button`
    background-color: #db8449;
    color: #fff;
    border: none;
    border-radius: 30px;
    padding: 5px 20px;
    margin: 5px 0px;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    &:disabled {
        opacity: 0.7;
        pointer-events: none;
    }
`