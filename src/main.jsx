import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import AllProduct from './Components/AllProducts/AllProducts'
import LogIn from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Contact from './Components/ContactUs/ContactUs'
import About from './Components/About/About'
import Carts from './Components/Carts/Carts'
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'allProduct',
        element: <AllProduct/>
      },
      {
        path:'login',
        element:<LogIn/>
      },
      {
        path:'signUp',
        element:<SignUp/>
      },
      {
        path:'contactUs',
        element:<Contact/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path : 'allCarts',
        element: <Carts/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
