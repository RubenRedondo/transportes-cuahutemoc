import {Navigate, Outlet, useLoaderData} from "react-router-dom";
import {useState} from "react";

export const AppOutlet = (props) => {
    
    const loadedData = useLoaderData();
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    
    return (
        <>
    
            {
                loadedData.user ? (
                    <Outlet/>
                ) : (
                    <Navigate to={"/login"} replace/>
                )
            }
            
        </>
    )
    
    
}
