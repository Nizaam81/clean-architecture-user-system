import "../auth/login.css";
import Form from "../common/Form";

export default function FpasswordChange() {

    const fields = [
        {
            name: "password",
            type: "password",
            placeholder: "Enter your new password"
        },
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Re-enter the password"
        }
    ];

   

    return (
        <div className="wrapper">
            <div className="container">

                <h1 className="title">Reset Password</h1>
                <p className="subtitle">
                    Enter your new password
                </p>

                <Form
                    fields={fields}
                    buttonText="Reset Password"
                    variant="reset"
                   
                />

            </div>
        </div>
    );
}