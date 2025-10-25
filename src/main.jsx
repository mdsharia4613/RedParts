import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import About from './Components/About/About.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';
import Home from './Components/Home/Home.jsx';
import Services from './Components/Services/Services.jsx';
import Cards from './Components/Cards/Cards.jsx';
import Error from './Components/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contacts></Contacts>
      },
  
     
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
