import { useContext } from "react";
import { createContext, Dispatch, useState, ReactNode, SetStateAction } from "react";

import { MemberType } from "../types/member";

type LoginUserType = MemberType & {isAdmin: boolean;};

export type LoginUserContextType = {
    loginUser: LoginUserType | null;
    setLoginUser: Dispatch<SetStateAction<LoginUserType | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: {children: ReactNode}) => {
    const { children } = props;
    const [loginUser, setLoginUser] = useState<LoginUserType | null>(null);
    return (
        <LoginUserContext.Provider value={{loginUser, setLoginUser}}>
            {children}
        </LoginUserContext.Provider>
    )
}

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);