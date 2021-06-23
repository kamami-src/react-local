import styled from "styled-components";
import { BaseInputStyle } from "./BaseInputStyle";

export const BaseInput = (props) => {
    const { name, type="text", placeholder="" } = props;
    return (
        <SInput name={ name } type={ type } placeholder={placeholder} />
    )
};

const SInput = styled(BaseInputStyle)``;
