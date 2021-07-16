import { VFC, useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { SearchInput } from "../molecules/SearchInput";
import { MemberCard } from "../organism/MemberCard";
import { MemberType } from "../../types/member";
import { GetUsers } from "../../hooks/GetUsers";
import { UseMessage } from "../../hooks/UseMessage"
import { MemberDetailModal } from "../organism/MemberDetailModal";

export const Profile: VFC = () => {
    console.log("Profileレンダリング")

    // メンバー一覧用の変数
    const [members, setMembers] = useState<Array<MemberType> | null>([]);
    const { getAllUsers, getSpecificUser } = GetUsers();

    // モーダル用変数
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState<MemberType | null>();
    const { showMessage } = UseMessage();

    const onClickUser = (id: number) => {
        // 選択したユーザIDの情報を取得できた場合モーダルを表示
        getSpecificUser({id: id}).then((res) => {
            if (res.data) {
                setShow(true);
                setTarget(res.data);
            } else {
                setShow(false);
                setTarget(null);
                const msg = res.msg ? res.msg : "ユーザが見つかりません";
                showMessage({type: "alert", message: msg});
            }
        }).catch(() => {
            setShow(false);
            setTarget(null);
            showMessage({type: "alert", message: "ユーザが見つかりません"});
        })
    }

    // 一覧データの取得（初回のみ実行）
    useEffect(() => {
        getAllUsers().then((res) => {
            setMembers(res.data);
        }).catch(() => {
            setMembers(null);
        })
    }, []);

    return (
        <div>
            <SearchInput />
            <SUserArea>
                {members ? (
                    members.map((member) => {
                        return <MemberCard id={member.id} member={member} onClick={ function(){onClickUser(member.id)} } />
                    })) :
                    ( "一覧を取得できませんでした")
                }
            </SUserArea>
            { show && target && (<MemberDetailModal show={show} setShow={setShow} target={target} />)}
            
        </div>
    );
};

const SUserArea = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`