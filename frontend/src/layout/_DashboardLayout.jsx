import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardRoute from "../../../DashboardRoute";

const _DashboardLayout = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    {
                        DashboardRoute.map((route, index) => {
                            return <Route path={route.path} key={index} element={route.element} />;
                        })
                    }
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default _DashboardLayout