import { VFC } from "react";
import styled from "styled-components";

import { BaseButtonStyle } from "./BaseButtonStyle";

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
} & JSX.IntrinsicElements["button"];

export const BaseButton: VFC<Props> = (props) => {
    const { children, type="button", onClick, disabled=false } = props;
    return (
        <SButton type={type} onClick={onClick} disabled={disabled}>{children}</SButton>
    )
};

const SButton = styled(BaseButtonStyle)``;