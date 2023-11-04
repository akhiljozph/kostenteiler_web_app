import { createBrowserRouter } from 'react-router-dom';

import App from '../components/app/App.tsx';
import Error from '../components/common/error/Error.tsx';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    }
]);

export default routes;