import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";

export const MemberIconWithName = (props) => {
    const { imageSrc, name } = props;
    const { userInfo }= useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false;

    return (
        <SContainer>
            <SImg src={imageSrc} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`

const SImg = styled.img`
    height: 200px;
    border-radius: 50%;
    display: inline;
`

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`

const SEdit = styled.span`
    text-decoration: underline;
    color: gray;
    &:hover {
        opacity: 0.7;
    }
`
