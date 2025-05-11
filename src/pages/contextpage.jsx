import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { beckEnd_url } from "./config";

const DataContext = createContext();

const DataProviderComponent = ({ children }) =>{
    const [token , setToken] = useState();
    const navigate = useNavigate();
    const getAuthData = async (route,setData) =>{
        try {
            if(token == undefined || token == null || token == ""){
                navigate("/login")
                return;
            }
            const res = await axios.get(`${beckEnd_url}/${route}/`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(res.data);
        } catch (error) {
            
        }
    }

    return <DataContext.Provider value={{token , setToken , getAuthData}}>
        {children}
    </DataContext.Provider>
}

export { DataContext  };
export default DataProviderComponent;