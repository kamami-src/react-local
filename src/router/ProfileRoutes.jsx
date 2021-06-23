import { Profile } from "../components/pages/Profile";
import { ProfileNico } from "../components/pages/ProfileNico";
import { ProfileGoemon } from "../components/pages/ProfileGoemon";
import { ProfileHina } from "../components/pages/ProfileHina";
import { ProfileParams } from "../components/pages/ProfileParams";

export const ProfileRoutes = [
    {
        path: "/",
        exact: true,
        children: <Profile />
    },
    {
        path: "/nico",
        exact: false,
        children: <ProfileNico />
    },
    {
        path: "/goemon",
        exact: false,
        children: <ProfileGoemon />
    },
    {
        path: "/hina",
        exact: false,
        children: <ProfileHina />
    },
    {
        path: "/:id",
        exact: false,
        children: <ProfileParams />
    }
]