import { useContext } from "react";
import { VFC } from "react";
import styled from "styled-components";
import { LoginUserContext } from "../../providers/LoginUserProvider";
import { NoImage } from "../atoms/image/NoImage";

type Props = {
    imageSrc: string;
    name: string;
}

export const MemberIconWithName: VFC<Props> = (props) => {
    const { imageSrc, name } = props;
    const { loginUser } = useContext(LoginUserContext);
    const isAdmin = loginUser ? loginUser.isAdmin : false;

    return (
        <SContainer>
            {imageSrc ? <SImg src={imageSrc} alt={`${name}プロフィール画像`} /> : <NoImage />}
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
