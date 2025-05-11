import { Formik, Form, Field } from "formik";
import { DataContext } from "./contextpage";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProductPost = () => {
    
    const { setToken, token } = useContext(DataContext);
    const navigate = useNavigate();
    return <>
            <div className="login-container">
        <Formik initialValues={{
            titel: '',
            price: '',
            img: '',
        }} onSubmit={(e) => {
            console.log(e);
            const postData = () => {
                fetch('http://localhost:2000/upload-product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(e)
                }).then((res) => res.json()).then((res) => {
                    console.log(res);
                    setToken(res.token);
                    navigate('/home');
                }).catch((err) => {
                    console.log("error");
                })
            }
            postData();
        }}>
        <Form className="signup-form">
            <h1>Create Product</h1>
            <Field type="text" name="titel" placeholder="Product Title" className="input-field" />
            <Field type="text" name="price" placeholder="Price" className="input-field" />
            <Field type="text" name="img" placeholder="Image URL" className="input-field" />
            <button type="submit" className="submit-button">Create Product</button>
        </Form>
        </Formik>
        </div>
    </>
}

export default ProductPost;