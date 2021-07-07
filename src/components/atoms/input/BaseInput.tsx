import { VFC } from "react";
import styled from "styled-components";
import { BaseInputStyle } from "./BaseInputStyle";

type Props = {
    name: string;
    type?: string;
    placeholder: string;
}

export const BaseInput: VFC<Props> = (props) => {
    const { name, type="text", placeholder="" } = props;
    return (
        <SInput name={ name } type={ type } placeholder={placeholder} />
    )
};

const SInput = styled(BaseInputStyle)``;
