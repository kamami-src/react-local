import axios from "axios";
import { useCallback, useState } from "react";

import { MemberType } from "../types/member";

type Props = {
    id: string;
}

type PromiseUserType = {
    data: MemberType | null;
    msg?: string
}
type PromiseUsersType = {
    data: Array<MemberType> | null;
    msg?: string
}

export const GetUsers = () => {
    
    const getAllUsers = useCallback(() => {
        return new Promise<PromiseUsersType>((resolve, reject) => {
            axios
                .get<Array<MemberType>>(`https://jsonplaceholder.typicode.com/users/`)
                .then( (res) => {
                    return resolve({data: res.data});
                })
                .catch(()=>{ 
                    return reject({data: null, msg: "ユーザーIDが存在しません"});
                 });
        })
    }, [])

    const getSpecificUser = useCallback((props: Props) => {
        const { id } = props;
        return new Promise<PromiseUserType>((resolve, reject) => {
            axios
                .get<MemberType>(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => {
                    return resolve({data: res.data})
                })
                .catch(()=>{ 
                    return reject({data: null, msg: "ユーザーIDが存在しません"})
                 });
        })
    }, [])

    return { getSpecificUser, getAllUsers };

}