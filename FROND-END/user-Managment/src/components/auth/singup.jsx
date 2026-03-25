import "../auth/signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <div className="signup-box">

                <h1 className="title">User Management System</h1>
                <p className="subtitle">
                    Create your account to manage users, roles and permissions
                </p>

                <form className="form">
                    <input placeholder="Full Name" type="text" />
                    <input placeholder="Email Address" type="email" />
                    <input placeholder="Phone Number" type="tel" />
                    <input placeholder="Password" type="password" />
                    <input placeholder="Confirm Password" type="password" />

                    <button type="submit">Create Account</button>
                </form>

                <div className="extra">
                    <p>
                        Already have an account? <span onClick={() => navigate("/login")}>Login</span>
                    </p>
                </div>

            </div>
        </div>
    );
}