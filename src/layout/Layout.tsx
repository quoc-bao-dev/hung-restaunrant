import React from "react";
import { Outlet } from "react-router-dom";
const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));
const MobileSidebar = React.lazy(() => import("./MobileSidebar"));

const Layout = () => {
    return (
        <>
            <Header />
            <MobileSidebar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
