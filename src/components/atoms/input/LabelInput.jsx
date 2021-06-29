import styled from "styled-components";
import { BaseInput } from "./BaseInput"; 

export const LabelInput = (props) => {
    const { label="", name, type, placeholder } = props;
    return (
        <SP><SLabel>{ label }<BaseInput name={ name } type={ type } placeholder={placeholder}></BaseInput></SLabel></SP>
        
        )
    }
const SP = styled.p`
    padding: 7px;
`;
const SLabel = styled.label`
    display: block;
    color: white;
    font-size: 12px;
`;