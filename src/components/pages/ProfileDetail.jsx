import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";


export const ProfileParams = () => {
    const { id } = useParams();
    const isAdmin = useContext(UserContext).isAdmin;
    return (
        <>
            <div>ProfileParams</div>
            <p>パラメータは{id}です</p>
            {isAdmin && <SEdit>編集</SEdit>}
        </>
    )
}

const SEdit = styled.span`
    text-decoration: underline;
`
