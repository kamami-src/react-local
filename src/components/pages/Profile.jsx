import { useHistory } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { MemberCard } from "../organism/MemberCard";
import styled from "styled-components";

export const Profile = () => {
    const members = [
        {
            id: 1,
            image: "https://source.unsplash.com/wTPp323zAEw",
            name: "nico",
            age: "3",
            birthday: "2017.2.5",
            hobby: "豆苗"
        },
        {
            id: 2,
            image: "https://source.unsplash.com/wTPp323zAEw",
            name: "goemon",
            age: "3",
            birthday: "2017.2.5",
            hobby: "豆苗"
        },
        {
            id: 3,
            image: "https://source.unsplash.com/wTPp323zAEw",
            name: "hina",
            age: "3",
            birthday: "2017.2.5",
            hobby: "豆苗"
        }
    ];

    const history = useHistory();
    const onClickCard = (id) => {
        history.push(`/profile/${id}`);
    }

    return (
        <div>
            <SearchInput />
            <SUserArea>
                {members.map((member) => {
                    return <MemberCard member={member} onClick={ function(){onClickCard(member.id)} } />
                })}
            </SUserArea>
        </div>
    );
};

const SUserArea = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`