import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { GetUsers } from "./GetUsers";
import { LoginUserContext, useLoginUser } from "../providers/LoginUserProvider";
import { UseMessage } from "./UseMessage";

export const UseAuth = () => {
    const { getSpecificUser } = GetUsers();
    const { loginUser, setLoginUser } = useLoginUser();
    const { showMessage } = UseMessage();
    const history = useHistory();

    /* ログイン処理 */
    const logIn = (id: number) => {
        getSpecificUser({id: id}).then((res) => {
            if (res.data) {
                const isAdmin = res.data.id===10 ? true : false; 
                setLoginUser({...res.data, isAdmin});
                history.push("/home");
            } else {
                setLoginUser(null);
                const msg = "データの取得に失敗しました";
                showMessage({ type: "alert", message: msg});
            }
        }).catch((res) => {
            setLoginUser(null);
            const msg = res.msg ? res.msg : "データの取得に失敗しました";
            showMessage({ type: "alert", message: msg});
        });
    }

    /* ログインユーザが管理者かどうか取得 */
    const GetAdminFlg = () => {
        const { loginUser } = useContext(LoginUserContext);
        const adminFlg = loginUser ? loginUser.isAdmin : false;
        return adminFlg;
    }

    return { logIn, GetAdminFlg };
}

