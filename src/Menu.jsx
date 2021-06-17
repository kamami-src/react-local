import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/diary">diary</Link>
                <Link to="/contact">contact</Link>
            </ul>
        </nav>
    );
};
