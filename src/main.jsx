import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
