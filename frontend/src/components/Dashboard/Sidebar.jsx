import { Fragment } from "react"
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Input,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const employeeDropdown = [
    {
        name: "All Employee",
        link: "/all-employee"
    },

    {
        name: "Holiday",
        link: "/holiday"
    },

    {
        name: "Leaves (Admin)",
        link: "/leave-admin"
    },

    {
        name: "Leaves (Employee)",
        link: "/leave-employee"
    },

    {
        name: "Attendance",
        link: "/attendance"
    },
]

const Sidebar = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            
            <Card className="h-full scroll-smooth overflow-auto top-0 left-0 z-40 h-screen overflow-hidden fixed rounded-none w-full max-w-[20rem] p-4 shadow-none">
                <div className="mb-2 flex items-center gap-4 p-4">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Nitro HR</span>
                        <img
                            className="w-20"
                            src={logo}
                            alt="Nitro HR logo" />
                    </Link>
                </div>
                <div className="p-2">
                    <Input className="focus:border-primary2 border-2 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary2"  icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
                </div>
                <List>
                    <Accordion
                        open={open === 1}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <Link to="/dashboard">
                            <ListItem>
                                <ListItemPrefix>
                                    <PresentationChartBarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Dashboard
                            </ListItem>
                        </Link>
                    
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <FontAwesomeIcon icon={faUsers} className="h-5 w-5" />
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal font">
                                    Employee
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                {
                                    employeeDropdown.map((item, index) => (
                                        <Link to={item.link} key={index}>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                {item.name}
                                            </ListItem>
                                        </Link>
                                    ))
                                }
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <hr className="my-2 border-blue-gray-50" />
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Inbox
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
            </Card>
        </Fragment>
    )
}

export default Sidebar