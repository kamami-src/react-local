import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import { MemberIconWithName } from "../molecules/MemberIconWithName";

export const MemberCard = (props) => {
    const { member } = props;
    return (
        <Card>
            <MemberIconWithName imageSrc={member.image} name={member.name} />
            <SDl>
                <dt>age</dt>
                <dd>{member.age}</dd>
                <dt>birthday</dt>
                <dd>{member.birthday}</dd>
                <dt>hobby</dt>
                <dd>{member.hobby}</dd>
            </SDl>
        </Card>
    )
};

const SDl = styled.dl`
    text-align: left;
    margin-top: 10px;
    dt {
        float: left;
        margin-bottom: 0;
    }
    dd {
        padding-left: 80px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`;
