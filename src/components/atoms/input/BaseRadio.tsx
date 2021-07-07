import React, { useState, memo, VFC } from "react";
import styled from "styled-components";

type Props = {
    name: string;
    value: any;
    label: string;
    defaultChecked: boolean;
    onChangeFunc: () => void;
}

export const BaseRadio: VFC<Props> = memo((props) => {
    const { name, value, label, defaultChecked=false, onChangeFunc } = props;

    const [ radioVal, setRadioVal ] = useState(defaultChecked);
    const changeRadio = () => {
        setRadioVal(!radioVal);
        if (onChangeFunc) {
            onChangeFunc();
        }
    }
    return (
        <>
            <SRadio id={`${name}${value}`} type="radio" name={name} value={value} defaultChecked={defaultChecked} onChange={changeRadio}/>
            <SLabel htmlFor={`${name}${value}`}>{label}</SLabel>
        </>
    )
});

const SRadio = styled.input`
    display: none;
    z-index: 100;
    &:checked {
        + label::after {
            opacity: 1;
        }
    }
`

const SLabel = styled.label`
    color: white;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    padding: 5px 30px;
    position: relative;
    width: auto;

    &::before {
        background: #fff;
        border: 1px solid #231815;
        border-radius: 50%;
        content: '';
        display: block;
        height: 16px;
        left: 5px;
        margin-top: -8px;
        position: absolute;
        top: 50%;
        width: 16px;
    }

    &::after {
        background: #ed7a9c;
        border-radius: 50%;
        content: '';
        display: block;
        height: 10px;
        left: 8px;
        margin-top: -5px;
        opacity: 0;
        position: absolute;
        top: 50%;
        width: 10px;
    }
`
