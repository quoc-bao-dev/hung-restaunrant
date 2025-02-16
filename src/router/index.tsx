import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import MainMenu from "../pages/menu/main/MainMenu";
import SushiMenu from "../pages/menu/main/SushiMenu";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />,
                children: [
                    {
                        path: '',
                        element: <MainMenu />
                    },
                    {
                        path: 'main',
                        element: <MainMenu />
                    },
                    {
                        path: 'sushi',
                        element: <SushiMenu />
                    }
                ]
            }
        ]
    }
])


export default router