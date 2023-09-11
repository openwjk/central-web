import React, {lazy} from 'react'
import Home from "@/views/Home"
import Login from "@/views/Login"
// import About from "@/views/About"
// import User from "@/views/User"
import {Navigate} from "react-router-dom"

const Page1 = lazy(() => import('@/views/Page1'))
const Page2 = lazy(() => import('@/views/Page2'))
const Page301 = lazy(() => import('@/views/Page301'))
const withLoading = (comp: React.JSX.Element) => (
    <React.Suspense fallback={<div>loading</div>}>{comp}</React.Suspense>
)

const routes = [
    // 嵌套路由开始
    {
        path: "/",
        element: <Navigate to="/page1"/>
    },
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "/page1",
                element: withLoading(<Page1/>)
            },
            {
                path: "/page2",
                element: withLoading(<Page2/>)
            },
            {
                path: "/page3/page301",
                element: withLoading(<Page301/>)
            }
        ]
    },
    // 嵌套路由结束
    {
        path: "/login",
        element: <Login/>
    },
    // 访问其余路径的时候直接跳到首页
    {
        path: "*",
        element: <Navigate to="/page1"/>
    }

    // {
    //     path: "/home",
    //     element: <Home />
    // }, 
    // {
    //     path: "/about",
    //     element: withLoading(<About />)
    // }, 
    // {
    //     path: "/user",
    //     element: withLoading(<User />)
    // }
]

export default routes