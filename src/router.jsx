import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Characters from "./Characters";
import CharacterDetails from "./CharacterDetails";
import NotFound from "./NotFound";


    export  const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                { 
                    path: "characters", 
                    element: <Characters /> 
                },
                {
                    path: "characters/:id",
                    element: <CharacterDetails />
                },
                {
                    path: "*",
                    element: <NotFound />
                }
            ]
        }
    ]);


