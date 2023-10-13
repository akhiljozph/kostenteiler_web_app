import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './components/app/App'
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Error from './components/error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  }, {
    path: 'login',
    element: <Login />
  }, {
    path: 'registration',
    element: <Registration />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
