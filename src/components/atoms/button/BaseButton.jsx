import styled from "styled-components";
import { BaseButtonStyle } from "./BaseButtonStyle";

export const BaseButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>
    )
};

const SButton = styled(BaseButtonStyle)``;