import { HeaderMenu } from "../organism/HeaderMenu";
import { Footer } from "../atoms/layout/Footer";
import { VFC } from "react";

type Props = {
    children: React.ReactNode;
}
export const DefaultLayout: VFC<Props> = (props) => {
    const { children } = props;
    return (
        <>
            <HeaderMenu />
            {children}
            <Footer />
        </>
    )
}
