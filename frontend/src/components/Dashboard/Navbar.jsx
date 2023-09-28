import { Navbar, IconButton } from "@material-tailwind/react";
import { useState, Fragment } from "react";
import { Bars2Icon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import ProfileMenu from "./ProfileMenu";
import Sidebar from "./Sidebar";

const NavigationBar = () => {
    const [isSideBar, setSideBar] = useState(false);

    const openSideBar = () => setSideBar(true);

    return (
        <Fragment>
            <Navbar className="max-w-8xl top-0 left-0 z-40 fixed p-2 rounded-none">
                <div className="relative container lg:flex lg:justify-between grid grid-cols-2 gap-20 mx-auto items-center text-blue-gray-900">
                    <IconButton
                        size="sm"
                        color="blue-gray"
                        variant="text"
                        onClick={openSideBar}
                        className="lg:hidden mr-24">
                        <Bars2Icon className="h-6 w-6" />
                    </IconButton>
                    <div className="ml-auto lg:float-right flex gap-1 md:mr-4">
                        <ProfileMenu />
                        <IconButton variant="text" color="blue-gray">
                            <Cog6ToothIcon className="h-6 w-6" />
                        </IconButton>
                        <IconButton variant="text" color="blue-gray">
                            <BellIcon className="h-6 w-6" />
                        </IconButton>
                    </div>
                </div>
            </Navbar>
            {
                isSideBar ? <Sidebar /> : ""
            }
            <div className="hidden lg:block">
                <Sidebar />
            </div>
        </Fragment>
    )
}

export default NavigationBar