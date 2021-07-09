export const UseMessage = () => {
    type Props = {
        type: "alert" | "confirm" | "prompt";
        message: string;
    }
    const showMessage = (props: Props) => {
        const { type, message } = props;
        switch (type) {
            case "alert":
                window.alert(message);
                break;
            case "confirm":
                window.confirm(message);
                break;
            case "prompt":
                window.prompt(message);
                break;
        }
    }
    return { showMessage };
}