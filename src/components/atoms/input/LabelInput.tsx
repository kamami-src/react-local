import { ChangeEvent, VFC } from "react";
import styled from "styled-components";
import { BaseInput } from "./BaseInput"; 

type Props = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    defaultValue?: string | number;
    readOnly?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const LabelInput: VFC<Props> = (props) => {
    const { label="", name, type, placeholder, defaultValue, readOnly=false, onChange } = props;
    return (
        <SP><SLabel>{ label }<BaseInput name={ name } type={ type } placeholder={placeholder} defaultValue={defaultValue} readOnly={readOnly} onChange={onChange}></BaseInput></SLabel></SP>
    )
}

const SP = styled.p`
    padding: 7px;
`;

const SLabel = styled.label`
    display: block;
    color: gray;
    font-size: 12px;
`;