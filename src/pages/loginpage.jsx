import { Formik, Form, Field } from "formik";

const LoginPage = () => {
    return <>
            <div className="login-container">
        <Formik initialValues={{
            email: "",
            password: "",
        }} onSubmit={(e) => {
            console.log(e);
            const LogDate = () => {
                fetch('http://localhost:2000/login', {
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
            LogDate();
        }}>
            <Form className="signup-form">
                <h2 className="form-title">Login</h2>
                <Field type="text" name="email" placeholder="Enter Email" className="input-field" />
                <Field type="text" name="password" placeholder="Enter password" className="input-field" />
                <button type="submit" className="submit-button">Login User</button>
            </Form>
        </Formik>
        </div>
    </>
}

export default LoginPage;