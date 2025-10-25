import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import NavbarWithMegaMenu from "../NavberMenu/Navbermenu";
import NavbarMenu from "../NavberMenu/Navbermenu";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <NavbarMenu></NavbarMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;