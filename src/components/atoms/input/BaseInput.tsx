import { ChangeEvent, VFC } from "react";
import styled from "styled-components";
import { BaseInputStyle } from "./BaseInputStyle";

type Props = {
    name: string;
    type?: string;
    placeholder?: string;
    defaultValue?: string | number;
    readOnly?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const BaseInput: VFC<Props> = (props) => {
    const { name, type="text", placeholder="", defaultValue="", readOnly=false, onChange } = props;
    return (
        <SInput name={ name } type={ type } placeholder={placeholder} defaultValue={defaultValue} readOnly={readOnly} onChange={onChange} />
    )
};

const SInput = styled(BaseInputStyle)``;
