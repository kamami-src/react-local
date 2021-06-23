import { Link } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { MemberCard } from "../organism/MemberCard";
import { MemberIconWithName } from "../molecules/MemberIconWithName";
import styled from "styled-components";

export const Profile = () => {
    const members = [
        {
            id: 1,
            link: "/profile/nico",
            image: "https://source.unsplash.com/wTPp323zAEw",
            name: "nico",
            age: "3",
            birthday: "2017.2.5",
            hobby: "豆苗"
        },
        {
            id: 2,
            link: "/profile/goemon",
            image: "https://source.unsplash.com/wTPp323zAEw",
            name: "goemon",
            age: "3",
            birthday: "2017.2.5",
            hobby: "豆苗"
        },
        {
            id: 3,
            link: "/profile/hina",
            image: "https://source.unsplash.com/wTPp323zAEw",
            name: "hina",
            age: "3",
            birthday: "2017.2.5",
            hobby: "豆苗"
        }
    ];

    return (
        <div>
            <SearchInput />
            <SUserArea>
                {members.map((member) => {
                    return <MemberCard member={member} />
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