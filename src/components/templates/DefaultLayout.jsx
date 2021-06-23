import { HeaderMenu } from "../organism/HeaderMenu";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) => {
    const { children } = props;
    return (
        <>
            <HeaderMenu />
            {children}
            <Footer />
        </>
    )
}
