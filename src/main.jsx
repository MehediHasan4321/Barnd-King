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
import { lodaedOrderCart, lodedProductDetails, } from './CustomLoder/CustomLoder'
import ProductDetails from './Components/AllProducts/ProductDetails/ProductDetails'
import AuthProvider from './AuthProvider/AuthProvider'
import CheckOut from './Components/CheckOut/CheckOut'
import PrivetRoute from './PrivetRoute/PrivetRoute'
import Inventory from './Components/Inventory/Inventory'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'allProduct',
        element: <AllProduct />,
        loader: () => fetch('product.json')
      },
      {
        path: 'login',
        element: <LogIn />
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path: 'contactUs',
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'allCarts',
        element: <Carts />,
        loader: lodaedOrderCart
      },
      {
        path: 'productDetails',
        element: <ProductDetails />,
        loader: lodedProductDetails
      },
      {
        path:'/checkOut',
        element:<PrivetRoute><CheckOut/></PrivetRoute>
      },
      {
        path:'/inventory',
        element:<PrivetRoute><Inventory/></PrivetRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
