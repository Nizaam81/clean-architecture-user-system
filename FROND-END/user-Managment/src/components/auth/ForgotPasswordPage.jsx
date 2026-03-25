import "../auth/login.css";
import Form from "../common/Form";

export default function ForgotPage() {

    const fields = [
        { type: "tel", placeholder: "Enter your phone number" }
    ];

    return (
        <div className="wrapper">
            <div className="container">

                <h1 className="title">Forgot Password</h1>
                <p className="subtitle">
                    Enter your phone number to receive OTP
                </p>

                <Form
                    fields={fields}
                    buttonText="Send OTP"
                    variant="forgot"
                />

            </div>
        </div>
    );
}