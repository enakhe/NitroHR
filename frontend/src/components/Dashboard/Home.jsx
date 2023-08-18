import { Fragment } from "react"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Home = () => {
    return (
        <Fragment>
            <div className="p-4 sm:ml-64">
                <div className="p-4 mt-14">
                    <h1 className="text-2xl font-semibold">Welcome Admin!</h1>
                    <p>Dashboard</p>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mb-4">
                    <div className="flex items-center shadow h-24 rounded bg-gray-50">
                        <div className="group justify-between relative flex gap-x-32 rounded-lg p-4 hover:bg-gray-50">

                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                                <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-primary2 group-hover:text-primary-hover" />
                            </div>

                            <div>
                                <a href="/" className="font-bold text-lg text-gray-900">
                                    1,345
                                    <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-md font-semibold text-gray-700">Employees</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home