import { Link } from "react-router-dom";

export const Profile = () => {
    return (
        <>
            <ul>
                <li><Link to="/profile/nico">nico</Link></li>
                <li><Link to="/profile/goemon">goemon</Link></li>
                <li><Link to="/profile/hina">hina</Link></li>
                <li><Link to="/profile/100">:id</Link></li>
            </ul> 
        </>
    );
};