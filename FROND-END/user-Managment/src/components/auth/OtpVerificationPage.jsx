import "../auth/login.css";
import Form from "../common/Form";

export default function OtpVerificationPage() {

    const fields = [
        { type: "tel", placeholder: "Enter the OTP", onlyNumber: true }
    ];

    return (
        <div className="wrapper">
            <div className="container">

                <h1 className="title">OTP Verification</h1>
                <p className="subtitle">
                    Enter the OTP sent to your phone/email
                </p>

                <Form
                    fields={fields}
                    buttonText="Verify OTP"
                    variant="verification"
                />

            </div>
        </div>
    );
}