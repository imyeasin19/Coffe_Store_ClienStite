import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Mainlayout from './Layouts/Mainlayout.jsx';
import Home from './Component/Home.jsx';
import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import CoffeeDetails from './Component/CoffeeDetails.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Component/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffee-store-server-omega-fawn.vercel.app/coffees'),
        Component: Home,
        hydrateFallbackElement:true,
      },
      {
        path:'/addCoffee',
        Component: AddCoffee
      },
      {
        path:'/coffee/:id',
        loader: ({params}) => fetch(`https://coffee-store-server-omega-fawn.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
        hydrateFallbackElement:true,
      },
      {
        path: '/updateCoffee/:id',
         loader: ({params}) => fetch(`https://coffee-store-server-omega-fawn.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
        hydrateFallbackElement:true,
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/users',
        loader: () => fetch('https://coffee-store-server-omega-fawn.vercel.app/users'),
        Component: Users,
        hydrateFallbackElement:true,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
