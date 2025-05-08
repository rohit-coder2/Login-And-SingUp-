import { Formik, Form, Field } from "formik";

const RegisterPage = () => {
    return <>
            <div className="login-container">
        <Formik initialValues={{
            name: "",
            email: "",
            phone: "",
            password: "",
        }} onSubmit={(e) => {
            console.log(e);
            const postData = () => {
                fetch('http://localhost:2000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(e)
                }).then((res) => res.json()).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log("error");
                })
            }
            postData();
        }}>
        <Form className="signup-form">
            <h1>Sing Up</h1>
            <Field type="text" name="name" placeholder="Your Name" className="input-field" />
            <Field type="text" name="email" placeholder="Your Email" className="input-field" />
            <Field type="text" name="phone" placeholder="Your Number" className="input-field" />
            <Field type="password" name="password" placeholder="Create Password" className="input-field" />
            <button type="submit" className="submit-button">Create User</button>
        </Form>
        </Formik>
        </div>
    </>
}

export default RegisterPage;