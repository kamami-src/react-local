import axios from "axios";
import { useCallback, useState } from "react";

import { MemberType } from "../types/member";

type Props = {
    id: number;
}

type PromiseUsersType = {
    data: Array<MemberType> | null;
    msg?: string
}

type PromiseUserType = {
    data: MemberType | null;
    msg?: string
}

export const GetUsers = () => {

    /* 全ユーザを取得 */
    const getAllUsers = useCallback(() => {
        return new Promise<PromiseUsersType>((resolve, reject) => {
            axios
                .get<Array<MemberType>>(`https://jsonplaceholder.typicode.com/users/`)
                .then((res) => {
                    if(res.data) {
                        return resolve({data: res.data});
                    } else {
                        return resolve({data: res.data, msg: "ユーザーが存在しません"});
                    }
                })
                .catch(()=>{ 
                    return reject({data: null, msg: "ユーザーを取得できませんでした"});
                 });
        })
    }, [])

    /* 指定IDのユーザを取得 */
    const getSpecificUser = useCallback((props: Props) => {
        const { id } = props;
        return new Promise<PromiseUserType>((resolve, reject) => {
            axios
                .get<MemberType>(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => {
                    if(res.data) {
                        return resolve({data: res.data});
                    } else {
                        return resolve({data: res.data, msg: "ユーザーが存在しません"});
                    }
                })
                .catch(()=>{ 
                    return reject({data: null, msg: "ユーザーを取得できませんでした"})
                });
        })
    }, [])

    return { getSpecificUser, getAllUsers };

}