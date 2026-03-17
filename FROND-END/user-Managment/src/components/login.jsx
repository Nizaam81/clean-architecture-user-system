import "./login.css"

export default function Login() {
    return (
        <div className="container">

            <input
                className="username"
                type="text"
                placeholder="Username"
            />

            <input
                className="password"
                type="password"
                placeholder="Password"
            />

            <button>Login</button>

            <a>Forgot Password?</a>

        </div>
    )
}