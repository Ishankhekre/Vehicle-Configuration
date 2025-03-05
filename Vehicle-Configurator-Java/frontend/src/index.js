import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from '../src/Pages/LoginPage';
import RegisterPage from "../src/Pages/RegisterPage";
import LandingPage from "../src/Pages/LandingPage";
import Selection from "../src/Pages/Selection";
import Business from "../src/Pages/Buisnes";
import InvoicePage from "../src/Pages/InvoicePage";
import OrdersPage from "../src/Pages/OrdersPage";
import { ToastContainer } from "react-toastify";


import ProtectedRoute from '../src/Service/ProtectedRoutes'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/LoginPage',
    element: <LoginPage />
  },
  {
    path: '/RegisterPage',
    element: <RegisterPage />
  },
  {
    path: '/LandingPage',
    element: <LandingPage />
  },
  {
    path: '/SelectionPage',
    element: <ProtectedRoute element={<Selection />} /> // Protected
  },
  {
    path: '/BusinessPage',
    element: <ProtectedRoute element={<Business />} /> // Protected
  },
  {
    path: '/InvoicePage',
    element: <ProtectedRoute element={<InvoicePage />} /> // Protected
  },
  {
    path: '/OrdersPage',
    element: <ProtectedRoute element={<OrdersPage />} /> // Protected
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <ToastContainer /> 
    
    <RouterProvider router={router} />
  </React.StrictMode>
);
