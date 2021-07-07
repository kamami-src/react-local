import { VFC, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { SearchInput } from "../molecules/SearchInput";
import { MemberCard } from "../organism/MemberCard";
import { Membertype } from "../../types/member";

export const Profile: VFC = () => {
    // const members = [
    //     {
    //         id: 1,
    //         image: "https://source.unsplash.com/wTPp323zAEw",
    //         name: "nico",
    //         age: "3",
    //         birthday: "2017.2.5",
    //         hobby: "豆苗"
    //     },
    //     {
    //         id: 2,
    //         image: "https://source.unsplash.com/wTPp323zAEw",
    //         name: "goemon",
    //         age: "3",
    //         birthday: "2017.2.5",
    //         hobby: "豆苗"
    //     },
    //     {
    //         id: 3,
    //         image: "https://source.unsplash.com/wTPp323zAEw",
    //         name: "hina",
    //         age: "3",
    //         birthday: "2017.2.5",
    //         hobby: "豆苗"
    //     }
    // ];
    
    const [members, setMembers] = useState<Array<Membertype>>([]);
    // 初回のみ実行
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((result)=>{ setMembers(result.data); })
            .catch((err)=>{ setMembers([]); });
        }
    );

    const history = useHistory();
    const onClickCard = (id: number) => {
        history.push(`/profile/${id}`);
    }
    return (
        <div>
            <SearchInput />
            <SUserArea>
                {members.map((member) => {
                    return <MemberCard key={member.id} member={member} onClick={ function(){onClickCard(member.id)} } />
                })}
            </SUserArea>
            {(members.length===0) && "一覧を取得できませんでした"}
        </div>
    );
};

const SUserArea = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`