import "../auth/login.css";
import Form from "../common/Form"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const fields = [
        { type: "text", placeholder: "Enter your phone or email" },
        { type: "password", placeholder: "Enter your password" }
    ];

    return (
        <div className="wrapper">
            <div className="container">

                <h1 className="title">User Management System</h1>
                <p className="subtitle">
                    Sign in to manage users, roles and permissions
                </p>

                <Form
                    fields={fields}
                    buttonText="Login"
                    variant="login"
                />

                <div className="extra">
                    <a href="#">Forgot Password?</a>
                    <p>
                        Don’t have an account? <span onClick={() => navigate("/signup")}>Register</span>
                    </p>
                </div>

            </div>
        </div>
    );
}