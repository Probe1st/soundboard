import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { Auth } from "../../pages";
import { useSelector } from "react-redux";
import { selectUserExists } from "../../stores/authSlice";



export default function Router() {
    const userExists = useSelector(selectUserExists);
    
    return (
        <>
            {
                userExists ? (
                    <Routes>
                        {
                            privateRoutes.map(route => {
                                return <Route path={route.path} element={route.element} key={route.path} />
                            })
                        }
                    </Routes>
                ) : (
                    <Routes>
                        {
                            publicRoutes.map(route => {
                                return <Route path={route.path} element={route.element} key={route.path} />
                            })
                        }
                        
                        <Route path="/" element={<Auth />}/>
                    </Routes>
                )
            }
        </>
    )
}