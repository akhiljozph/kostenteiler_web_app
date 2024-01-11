import { createBrowserRouter } from 'react-router-dom';

import App from '../components/app/App.tsx';
import Error from '../components/common/error/Error.tsx';
import Login from '../components/login/Login.tsx';
import Registration from '../components/registration/registration.tsx';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                path: "login",
                element: <Login />
            },
            {
                index: true,
                path: "registration",
                element: <Registration />
            }
        ]
    }, {
        path: "*",
        element: <Error />
    }
]);

export default routes;