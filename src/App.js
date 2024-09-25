import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Store from "./components/Store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Footer from "./components/Footer";

const root=ReactDOM.createRoot(document.getElementById("root"));

const App=()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Provider  store={Store}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
    )
}

const myRoutes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
        ]
    },
    
])

root.render(<RouterProvider router={myRoutes}/>)