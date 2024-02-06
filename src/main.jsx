import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Componentes 
import Home from './Components/Home.jsx';
import Proyects from './Components/Proyects.jsx';
import ErrorPage from './error-page.jsx';
import Login from './Components/Login.jsx';
// El enrutador 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Estilos 
import './main.css';
import Test from './Components/Test.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Proyects/>
      },      
    ]
  },
  {
    path: '/generador/:id',
    element: <Test/>
  },
  {
    path: '/login',
    element: <Login/>
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CssVarsProvider defaultMode="dark" >
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
  </CssVarsProvider>
  </React.StrictMode>
)
