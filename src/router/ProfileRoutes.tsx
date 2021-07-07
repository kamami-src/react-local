import { Profile } from "../components/pages/Profile";
import { ProfileDetail } from "../components/pages/ProfileDetail";

export const ProfileRoutes = [
    {
        path: "/",
        exact: true,
        children: <Profile />
    },
    {
        path: "/:id",
        exact: false,
        children: <ProfileDetail />
    }
]