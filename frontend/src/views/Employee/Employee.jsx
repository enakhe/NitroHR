import { Fragment } from "react"
import Navbar from "../../components/Dashboard/Navbar";
import Home from "../../components/Employee/Home";

const Employee = () => {
    return (
        <Fragment>
            <Navbar />
            <Home />
        </Fragment>
    )
}

export default Employee