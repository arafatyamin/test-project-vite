import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../Root/Root";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/home",
                element:<Home />
            },
            {
                path:"/services",
                element:<Services />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
        ]
    }
])

export default router;