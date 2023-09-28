import { faClock, faEdit, faEllipsisVertical, faTrash, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Chip, Menu, MenuHandler, Button, Checkbox, MenuItem, MenuList, Typography, Input } from "@material-tailwind/react"
import { Fragment } from "react"
import Pagination from "../Utils/Pagination"

const Datatable = () => {
    return (
        <Fragment>
            <div className="p-4 container">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold">Employee Datatable</h1>
                </div>
            </div>
            <div className="p-2 lg:flex lg:justify-between container">
                <Menu
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}>
                    <MenuHandler>
                        <Button variant="outlined">
                            <FontAwesomeIcon className="h-3 w-3 mr-2" icon={faClock} />
                            Last 30 days
                        </Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem className="p-0">
                            <label
                                htmlFor="item-1"
                                className="flex cursor-pointer items-center gap-2 p-2">
                                <Checkbox
                                    ripple={false}
                                    id="item-1"
                                    containerProps={{ className: "p-0" }}
                                    className="hover:before:content-none"
                                />
                                Last day
                            </label>
                        </MenuItem>
                        <MenuItem className="p-0">
                            <label
                                htmlFor="item-1"
                                className="flex cursor-pointer items-center gap-2 p-2">
                                <Checkbox
                                    ripple={false}
                                    id="item-1"
                                    containerProps={{ className: "p-0" }}
                                    className="hover:before:content-none"
                                />
                                Last 7 days
                            </label>
                        </MenuItem>
                        <MenuItem className="p-0">
                            <label
                                htmlFor="item-1"
                                className="flex cursor-pointer items-center gap-2 p-2">
                                <Checkbox
                                    ripple={false}
                                    id="item-1"
                                    containerProps={{ className: "p-0" }}
                                    className="hover:before:content-none"
                                />
                                Last 30 days
                            </label>
                        </MenuItem>
                        <MenuItem className="p-0">
                            <label
                                htmlFor="item-1"
                                className="flex cursor-pointer items-center gap-2 p-2">
                                <Checkbox
                                    ripple={false}
                                    id="item-1"
                                    containerProps={{ className: "p-0" }}
                                    className="hover:before:content-none"
                                />
                                Last month
                            </label>
                        </MenuItem>
                        <MenuItem className="p-0">
                            <label
                                htmlFor="item-1"
                                className="flex cursor-pointer items-center gap-2 p-2">
                                <Checkbox
                                    ripple={false}
                                    id="item-1"
                                    containerProps={{ className: "p-0" }}
                                    className="hover:before:content-none"
                                />
                                Last year
                            </label>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <div className="sm:mt-3">
                    <Input className="focus:border-primary2 border-2 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary2" icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
                </div>
            </div>
            <div className="relative overflow-x-auto container">
                <table className="w-full lg:shadow-md sm:rounded-lg text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-200 bg-gray-900 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-primary2 bg-gray-100 border-gray-300 rounded focus:ring-primary2 focus:ring-2" />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Employee ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Join Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-primary2 bg-gray-100 border-gray-300 rounded focus:ring-primary2 focus:ring-2" />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                ID1234
                            </td>
                            <td className="px-6 py-4">
                                09069477106
                            </td>
                            <td className="px-6 py-4">
                                March 21st, 2021
                            </td>
                            <td className="px-6 py-4">
                                <Chip variant="outlined" className="rounded-full text-center border-primary2 border-2" value="React Developer" />
                            </td>
                            <td className="px-6 py-4">
                                <Menu animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}>
                                    <MenuHandler>
                                        <FontAwesomeIcon className="h-4 w-4 cursor-pointer" icon={faEllipsisVertical} />
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-blue-700" icon={faEdit} />
                                            <Typography variant="small" className="font-normal font text-blue-700">
                                                Edit
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-red-700" icon={faTrash} />
                                            <Typography variant="small" className="font-normal font text-red-700">
                                                Delete
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-gray-800" icon={faUser} />
                                            <Typography variant="small" className="font-normal font text-gray-800">
                                                Full profile
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-primary2 bg-gray-100 border-gray-300 rounded focus:ring-primary2 focus:ring-2" />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                ID1234
                            </td>
                            <td className="px-6 py-4">
                                09069477106
                            </td>
                            <td className="px-6 py-4">
                                March 21st, 2021
                            </td>
                            <td className="px-6 py-4">
                                <Chip variant="outlined" className="rounded-full text-center border-primary2 border-2" value="React Developer" />
                            </td>
                            <td className="px-6 py-4">
                                <Menu animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}>
                                    <MenuHandler>
                                        <FontAwesomeIcon className="h-4 w-4 cursor-pointer" icon={faEllipsisVertical} />
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-blue-700" icon={faEdit} />
                                            <Typography variant="small" className="font-normal font text-blue-700">
                                                Edit
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-red-700" icon={faTrash} />
                                            <Typography variant="small" className="font-normal font text-red-700">
                                                Delete
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-gray-800" icon={faUser} />
                                            <Typography variant="small" className="font-normal font text-gray-800">
                                                Full profile
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-primary2 bg-gray-100 border-gray-300 rounded focus:ring-primary2 focus:ring-2" />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                ID1234
                            </td>
                            <td className="px-6 py-4">
                                09069477106
                            </td>
                            <td className="px-6 py-4">
                                March 21st, 2021
                            </td>
                            <td className="px-6 py-4">
                                <Chip variant="outlined" className="rounded-full text-center border-primary2 border-2" value="React Developer" />
                            </td>
                            <td className="px-6 py-4">
                                <Menu animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}>
                                    <MenuHandler>
                                        <FontAwesomeIcon className="h-4 w-4 cursor-pointer" icon={faEllipsisVertical} />
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-blue-700" icon={faEdit} />
                                            <Typography variant="small" className="font-normal font text-blue-700">
                                                Edit
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-red-700" icon={faTrash} />
                                            <Typography variant="small" className="font-normal font text-red-700">
                                                Delete
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-gray-800" icon={faUser} />
                                            <Typography variant="small" className="font-normal font text-gray-800">
                                                Full profile
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-primary2 bg-gray-100 border-gray-300 rounded focus:ring-primary2 focus:ring-2" />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                ID1234
                            </td>
                            <td className="px-6 py-4">
                                09069477106
                            </td>
                            <td className="px-6 py-4">
                                March 21st, 2021
                            </td>
                            <td className="px-6 py-4">
                                <Chip variant="outlined" className="rounded-full text-center border-primary2 border-2" value="React Developer" />
                            </td>
                            <td className="px-6 py-4">
                                <Menu animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}>
                                    <MenuHandler>
                                        <FontAwesomeIcon className="h-4 w-4 cursor-pointer" icon={faEllipsisVertical} />
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-blue-700" icon={faEdit} />
                                            <Typography variant="small" className="font-normal font text-blue-700">
                                                Edit
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-red-700" icon={faTrash} />
                                            <Typography variant="small" className="font-normal font text-red-700">
                                                Delete
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-gray-800" icon={faUser} />
                                            <Typography variant="small" className="font-normal font text-gray-800">
                                                Full profile
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-primary2 bg-gray-100 border-gray-300 rounded focus:ring-primary2 focus:ring-2" />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                ID1234
                            </td>
                            <td className="px-6 py-4">
                                09069477106
                            </td>
                            <td className="px-6 py-4">
                                March 21st, 2021
                            </td>
                            <td className="px-6 py-4">
                                <Chip variant="outlined" className="rounded-full text-center border-primary2 border-2" value="React Developer" />
                            </td>
                            <td className="px-6 py-4">
                                <Menu animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}>
                                    <MenuHandler>
                                        <FontAwesomeIcon className="h-4 w-4 cursor-pointer" icon={faEllipsisVertical} />
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-blue-700" icon={faEdit} />
                                            <Typography variant="small" className="font-normal font text-blue-700">
                                                Edit
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-red-700" icon={faTrash} />
                                            <Typography variant="small" className="font-normal font text-red-700">
                                                Delete
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem className="flex items-center gap-2">
                                            <FontAwesomeIcon className="h-3 w-3 text-gray-800" icon={faUser} />
                                            <Typography variant="small" className="font-normal font text-gray-800">
                                                Full profile
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="grid justify-items-center py-4">
                <Pagination />
            </div>
        </Fragment>
    )
}

export default Datatable