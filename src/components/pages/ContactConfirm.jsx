import { useLocation } from "react-router-dom";

export const ContactConfirm = () => {
    const { state } = useLocation();
    console.log(state);
    const name = state.form.name;
    const age = state.form.age;
    return (
        <>
            <p>ContactComfirm</p>
            <p>名前：{name}</p>
            <p>年齢：{age}</p>
        </>

    )
}