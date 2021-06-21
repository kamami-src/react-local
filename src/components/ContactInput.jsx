import styled from "styled-components";

const SContactP = styled.p`
    {
        padding: 7px;
    }
`;
const SContactLabel = styled.label`
    {
        display: block;
        color: white;
        font-size: 12px;
    }
`;
const SContactInput = styled.input`
    {
        display: block;
        width: 250px;
        height: 30px;
        border: 0.5px solid gray;
        border-radius: 5px;
        margin: 4px;
        padding: 4px;
        autocomplete="off";
    }    
`;

export const ContactInput = (props) => {
    const { label, name, type, placeholder } = props;
    return (
        <SContactP><SContactLabel>{ label }<SContactInput name={ name } type={ type } placeholder={placeholder} /></SContactLabel></SContactP>
    )
}