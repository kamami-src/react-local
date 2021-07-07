import { VFC, useContext } from "react";

import { LoginUserContext } from "../../providers/LoginUserProvider";
import { TopImage } from "../atoms/image/TopImage"
import { BaseRadio } from "../atoms/input/BaseRadio";

export const Home: VFC = () => {
    const { loginUser, setLoginUser } = useContext(LoginUserContext);
    const onChangeTrueFunc = () => setLoginUser({ isAdmin: true });
    const onChangeFalseFunc = () => setLoginUser({ isAdmin: false });
    
    return (
        <>
            <BaseRadio name="adminUser" value="false" label="一般" defaultChecked={loginUser ? !loginUser.isAdmin : true} onChangeFunc={ onChangeFalseFunc } />
            <BaseRadio name="adminUser" value="true" label="管理者" defaultChecked={loginUser ? loginUser.isAdmin: false} onChangeFunc={ onChangeTrueFunc } />
            <TopImage />
        </>
    )
}
