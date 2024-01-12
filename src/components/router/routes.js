import { Auth, Main, Profile } from '../../pages/';

export const publicRoutes = [
    {
        path: "/authentication",
        element: <Auth />
    }
]

export const privateRoutes = [
    ...publicRoutes,
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/profile",
        element: <Profile />
    }
]