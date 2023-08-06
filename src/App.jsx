import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './Components/Home/Home';
import Managefurniture from './Components/Managefurniture/Managefurniture';
import Addfurniture from './Components/Addfurniture/Addfurniture';
import Productdetails from './Components/Home/Productdetails';
import Updatefurniture from './Components/Managefurniture/Updatefurniture';
import Contact from './Components/Contact/Contact';
import Aboutus from './Components/About/Aboutus';
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      loader: function(){
        return fetch(`http://localhost:3000/all-product`)
      }
    },
    {
      path : "/about-us",
      element : <Aboutus/>
    },
    {
      path : "/contact",
      element : <Contact/>
    },
    {
      path:"/manage-product",
      element: <Managefurniture/>,
      loader: function(){
        return fetch('http://localhost:3000/all-product')
      }
    },
    {
      path:"/add-product",
      element:<Addfurniture/>
    },
    {
      path:"/single-product/:id",
      element: <Productdetails/>,
      loader: function({params}){
        return fetch(`http://localhost:3000/single-product/${params.id}`)
      }
    },
    {
      path:"/update-product/:id",
      element : <Updatefurniture/>,
      loader : function({params}){
        return fetch(`http://localhost:3000/single-product/${params.id}`)
      }
    }
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
