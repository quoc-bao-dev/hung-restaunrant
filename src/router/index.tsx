import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import React from "react";
const Home = React.lazy(() => import("../pages/home/Home"));
const Menu = React.lazy(() => import("../pages/menu/Menu"));
const MainMenu = React.lazy(() => import("../pages/menu/main/MainMenu"));
const SushiMenu = React.lazy(() => import("../pages/menu/main/SushiMenu"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "menu",
                element: <Menu />,
                children: [
                    {
                        path: "",
                        element: <MainMenu />,
                    },
                    {
                        path: "main",
                        element: <MainMenu />,
                    },
                    {
                        path: "sushi",
                        element: <SushiMenu />,
                    },
                ],
            },
        ],
    },
]);

export default router;
