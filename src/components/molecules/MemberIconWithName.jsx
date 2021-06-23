import styled from "styled-components";

export const MemberIconWithName = (props) => {
    const { imageSrc, name } = props;
    return (
        <SContainer>
            <SImg src={imageSrc} alt={name} />
            <SName>{name}</SName>
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