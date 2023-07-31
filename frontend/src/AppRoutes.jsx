import Demo from "./views/Demo/Demo";
import { Home } from "./views/Home/Home";

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
];

export default AppRoutes;
