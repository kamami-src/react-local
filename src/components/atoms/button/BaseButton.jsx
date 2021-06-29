import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BaseButtonStyle } from "./BaseButtonStyle";

export const BaseButton = (props) => {
    const { children, type, onClick } = props;
    return (
        <SButton type={type} onClick={onClick}>{children}</SButton>
    )
};

const SButton = styled(BaseButtonStyle)``;