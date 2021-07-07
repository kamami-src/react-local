import { VFC } from "react";
import { useLocation } from "react-router-dom";


export const ContactConfirm: VFC = () => {
    return (
        <div>ContactConfirm</div>
    );
};

// export const ContactConfirm: VFC = () => {
//     const { state } = useLocation();
//     const name = state.form.name;
//     const age = state.form.age;
//     return (
//         <>
//             <p>ContactComfirm</p>
//             <p>名前：{name}</p>
//             <p>年齢：{age}</p>
//         </>
//     )
// }