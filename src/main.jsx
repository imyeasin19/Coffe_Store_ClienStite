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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home,
        hydrateFallbackElement:true,
      },
      {
        path:'/addCoffee',
        Component: AddCoffee
      },
      {
        path:'/coffee/:id',
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
        hydrateFallbackElement:true,
      },
      {
        path: '/updateCoffee/:id',
         loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
        hydrateFallbackElement:true,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
