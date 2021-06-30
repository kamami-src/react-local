import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import { MemberIconWithName } from "../molecules/MemberIconWithName";

export const MemberCard = (props) => {
    const { member, onClick } = props;
    const { image, name="", age="99", birthday="111", hobby="11" } = member;
    return (
        <Card onClick={onClick}>
            <MemberIconWithName imageSrc={image} name={name} />
            <SDl>
                <div>
                    <dt>age</dt>
                    <dd>{age}</dd>
                </div>
                <div>
                    <dt>birthday</dt>
                    <dd>{birthday}</dd>
                </div>
                <div>
                    <dt>hobby</dt>
                    <dd>{hobby}</dd>
                </div>
            </SDl>
        </Card>
    )
};


const SDl = styled.dl`
    text-align: left;
    margin: 8px 0;
    div {
        display: flex;

        dt {

            min-width: 6em;
            min-height: 1em;
            margin: 0.1em 0 0.5em 0;
        }
        dd {
            display:inline-block;
            min-width: 5em;
            min-height: 1em;
            margin: 0.1em 0.5em 0 0;
            overflow-wrap: break-word;
        }
    }
`;

