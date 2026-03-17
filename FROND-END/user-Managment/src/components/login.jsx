import "./login.css";

export default function Login() {
    return (
        <div className="wrapper">
            <div className="container">

                <h1 className="title">User Management System</h1>
                <p className="subtitle">
                    Sign in to manage users, roles and permissions
                </p>

                <form className="form">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter your username or email"
                    />

                    <input
                        className="input"
                        type="password"
                        placeholder="Enter your password"
                    />

                    <button type="submit">Login</button>
                </form>

                <div className="extra">
                    <a href="#">Forgot Password?</a>
                    <p>
                        Don’t have an account? <span>Register</span>
                    </p>
                </div>

            </div>
        </div>
    );
}