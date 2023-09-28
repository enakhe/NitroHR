import { CodeBracketSquareIcon, CubeTransparentIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react"
import NavlistMenu from "./NavlistMenu";
import { MenuItem, Typography } from "@material-tailwind/react";
import { createElement } from "react";

const navListItems = [
    {
        label: "Account",
        icon: UserCircleIcon,
    },
    {
        label: "Blocks",
        icon: CubeTransparentIcon,
    },
    {
        label: "Docs",
        icon: CodeBracketSquareIcon,
    },
];

const NavList = () => {
    return (
        <Fragment>
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
                <NavlistMenu />
                {navListItems.map(({ label, icon }) => (
                    <Typography
                        key={label}
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-normal font"
                    >
                        <MenuItem className="flex items-center gap-2 lg:rounded-full">
                            {createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                            {label}
                        </MenuItem>
                    </Typography>
                ))}
            </ul>

        </Fragment>
    )
}

export default NavList