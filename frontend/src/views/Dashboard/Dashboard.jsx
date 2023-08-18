import { Fragment } from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import Home from "../../components/Dashboard/Home";


const Dashboard = () => {
    return (
        <Fragment>
            <Navbar />
            <Sidebar />
            <Home />
        </Fragment>
    )
}

export default Dashboard;