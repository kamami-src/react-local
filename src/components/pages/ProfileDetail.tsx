import { VFC, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { LoginUserContext } from "../../providers/LoginUserProvider";

export const ProfileDetail: VFC = () => {
    const { id } = useParams<{id: string}>();
    const isAdmin = useContext(LoginUserContext).loginUser?.isAdmin;
    return (
        <>
            <div>ProfileDetail</div>
            <p>パラメータは{id}です</p>
            {isAdmin && <SEdit>編集</SEdit>}
        </>
    )
}

const SEdit = styled.span`
    text-decoration: underline;
`
