import { VFC } from "react";
import { HeaderMenu } from "../organism/HeaderMenu";

type Props = {
    children: React.ReactNode;
}
export const HeaderOnly: VFC<Props> = (props) => {
    const { children } = props;
    return (
        <>
            <HeaderMenu />
            {children}
        </>
    )
}
