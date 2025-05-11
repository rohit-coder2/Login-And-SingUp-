import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./contextpage";

const HomePage = () => {

    const {token , getAuthData  } = useContext(DataContext);
    const navigate = useNavigate();

    const [product, setProduct] = useState();
    

    useEffect(() => {
        if (token == null || token == undefined || token == "") {
            navigate("/login");
        }
        getAuthData(`get-product`, setProduct)
    }, []);

    if (!product) {
        return <>
        <div className="con">
        <div className="loader"> 
            </div>
        </div>
        </>
    }
    console.log(product);

    return <>
        {product?.map((element) => {
            return <div>
                <h1>{element.title}</h1>
                <img src={element.img} />
                <h2>{element.price}</h2>
            </div>
        })}
    </>
}

export default HomePage;