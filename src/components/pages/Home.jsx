import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { TopImage } from "../atoms/image/TopImage"
import { BaseRadio } from "../atoms/input/BaseRadio";

export const Home = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const onChangeTrueFunc = () => setUserInfo({ isAdmin: true });
    const onChangeFalseFunc = () => setUserInfo({ isAdmin: false });
    
    return (
        <>
            <BaseRadio name="adminUser" value="false" label="一般" defaultChecked={!userInfo.isAdmin} onChangeFunc={ onChangeFalseFunc } />
            <BaseRadio name="adminUser" value="true" label="管理者" defaultChecked={userInfo.isAdmin} onChangeFunc={ onChangeTrueFunc } />
            <TopImage />
        </>
    )
}
