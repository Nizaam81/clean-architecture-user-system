import "../auth/login.css";

export default function Form({ fields, buttonText, variant }) {
    return (
        <form className={`form ${variant}`}>
            {fields.map((field, index) => (
                <input
                    key={index}
                    className="input"
                    type={field.type}
                    placeholder={field.placeholder}
                    
                />
            ))}

            <button type="submit">{buttonText}</button>
        </form>
    );
}