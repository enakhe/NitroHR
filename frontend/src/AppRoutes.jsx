import Dashboard from "./views/Dashboard/Dashboard";
import Demo from "./views/Demo/Demo";
import Employee from "./views/Employee/Employee";
import { Home } from "./views/Home/Home";
import Login from "./views/Login/Login";

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
        name: 'Home',
    },

    {
        path: '/request-demo',
        element: <Demo />,
        name: 'Demo',
    },

    {
        path: '/login',
        element: <Login />,
        name: 'Login',
    },

    {
        path: '/dashboard',
        element: <Dashboard />,
        name: 'Login',
    },

    {
        path: '/all-employee',
        element: <Employee />,
        name: 'All Employee',
    },
];

export default AppRoutes;
