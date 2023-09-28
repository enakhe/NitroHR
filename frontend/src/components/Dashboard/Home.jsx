import { Fragment } from "react"
import { faUsers, faCubesStacked, faBarsProgress } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Home = () => {
    return (
        <Fragment>
            <div className="lg:pt-20 lg:ml-80 pt-10 container">
                <div className="p-4">
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
                    <div className="flex items-center shadow h-24 rounded bg-gray-50">
                        <div className="group justify-between relative flex gap-x-32 rounded-lg p-4 hover:bg-gray-50">

                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                                <FontAwesomeIcon icon={faCubesStacked} className="h-10 w-10 text-primary2 group-hover:text-primary-hover" />
                            </div>

                            <div>
                                <a href="/" className="font-bold text-lg text-gray-900">
                                    100
                                    <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-md font-semibold text-gray-700">Projects</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center shadow h-24 rounded bg-gray-50">
                        <div className="group justify-between relative flex gap-x-32 rounded-lg p-4 hover:bg-gray-50">

                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                                <FontAwesomeIcon icon={faBarsProgress} className="h-10 w-10 text-primary2 group-hover:text-primary-hover" />
                            </div>

                            <div>
                                <a href="/" className="font-bold text-lg text-gray-900">
                                    503
                                    <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-md font-semibold text-gray-700">Tasks</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home