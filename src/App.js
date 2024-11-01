import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter,RouterProvider,Outlet, createBrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/Store";
import Cart from "./components/Cart";
import About from "./components/About"

const root=ReactDOM.createRoot(document.getElementById("root"));

export const UserContext=createContext()

const AppLayout=()=>{
    return(
            <Provider store={store}>
                <Header/>
                <Outlet/>
                <Footer/>
            </Provider>     
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])

root.render(<RouterProvider router={appRouter}/>)

