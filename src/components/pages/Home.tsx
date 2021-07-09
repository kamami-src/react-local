import { VFC, useContext } from "react";

import { LoginUserContext } from "../../providers/LoginUserProvider";
import { TopImage } from "../atoms/image/TopImage"
import { BaseRadio } from "../atoms/input/BaseRadio";

export const Home: VFC = () => {
    return (
        <>
            <TopImage />
        </>
    )
}
