import { useParams } from "react-router-dom";

export const ProfileParams = () => {
    const { id } = useParams();
    return (
        <>
            <div>ProfileParams</div>
            <p>パラメータは{id}です</p>
        </>
    )
}