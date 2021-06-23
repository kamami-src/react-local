import { HeaderMenu } from "../organism/HeaderMenu";

export const HeaderOnly = (props) => {
    const { children } = props;
    return (
        <>
            <HeaderMenu />
            {children}
        </>
    )
}
