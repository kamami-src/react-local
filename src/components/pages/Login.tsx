import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { LabelInput } from "../atoms/input/LabelInput"
import { BaseButton } from "../atoms/button/BaseButton";
import { UseAuth } from  "../../hooks/UseAuth";

export const Login = () => {
    
    const [loginId, setLoginId] = useState<string>('');
    const { logIn } = UseAuth();
    const [ disabledFlg, setDisabledFlg ] = useState<boolean>(true);
    
    const onChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginId(e.target.value);
        setDisabledFlg(e.target.value ? false : true);
    }
    
    const onClickFunc = () => {
        logIn(loginId);
    }

    return (
        <>
            <SContainer>
                <LabelInput label="ログインID" name="loginId" type="text" placeholder="例：111" onChange={onChangeFunc} />
                <BaseButton onClick={onClickFunc} disabled={disabledFlg}>ログイン</BaseButton>
            </SContainer>
        </>
    )
}


const SContainer = styled.div`
        background-color: darkgray;
        border-radius: 30px;
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
        padding: 20px;
        width: 330px;
        margin: 0 auto;
        margin-top: 25vh;

        label {
            font-size: 16px;
        }
    }

`
