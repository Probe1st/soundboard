import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

export default function Router() {    
    return (
        <>
            <Routes>
                {
                    publicRoutes.map(route => {
                        return <Route path={route.path} element={route.element} key={route.path} />
                    })
                }
            </Routes>
        </>
    )
}