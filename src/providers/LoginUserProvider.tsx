import { createContext, Dispatch, useState, ReactNode, SetStateAction } from "react";

import { UserType } from "../types/user";

type LoginUserType = UserType & {isAdmin: boolean};

export type LoginUserContextType = {
    loginUser: LoginUserType | null;
    setLoginUser: Dispatch<SetStateAction<LoginUserType | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: {children:ReactNode}) => {
    const { children } = props;
    const [loginUser, setLoginUser] = useState<LoginUserType | null>(null);
    return (
        <LoginUserContext.Provider value={{loginUser, setLoginUser}}>
            {children}
        </LoginUserContext.Provider>
    )
}
