import { Profile } from "../Profile";
import { ProfileNico } from "../ProfileNico";
import { ProfileGoemon } from "../ProfileGoemon";
import { ProfileHina } from "../ProfileHina";
import { ProfileParams } from "../ProfileParams";

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