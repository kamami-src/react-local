import { VFC } from "react";
import styled from "styled-components";

import { BaseButtonStyle } from "./BaseButtonStyle";

type Props = {
    children: React.ReactNode;
    onClick?: VoidFunction;
} & JSX.IntrinsicElements["button"];

export const BaseButton:VFC<Props> = (props) => {
    const { children, type="button", onClick } = props;
    return (
        <SButton type={type} onClick={onClick}>{children}</SButton>
    )
};

const SButton = styled(BaseButtonStyle)``;