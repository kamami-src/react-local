import { useHistory } from "react-router-dom";
import { LabelInput } from "../atoms/input/LabelInput";
import { BaseButton } from "../atoms/button/BaseButton";

export const Contact = () => {
    const history = useHistory();
    const contactConfirm = () => {
        const forms = document.contactform;
        const form = {
            name: forms.name.value,
            age: forms.age.value,
        }
        history.push("/contact/confirm", {form: form} );
    }
    return (
        <>
            <p>contact</p>
            <form name="contactform" autocomplete="off">
                <LabelInput　label= "名前" name="name" type="text" placeholder="山田　花子" />
                <LabelInput　label= "年齢" name="age" type="number" placeholder="30" />
                <LabelInput　label= "趣味" name="hobby" type="text" placeholder="釣り、映画鑑賞" />
                <BaseButton type="button" onClick={ contactConfirm }>確認</BaseButton>
            </form>            
        </>
    );
};