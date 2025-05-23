import React from "react";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
    const handleRegister = () => {
        alert('Registration successful. You can now log in.');       
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem'}}>
            <RegisterForm onRegister={handleRegister}/>
        </div>
    );
}

export default RegisterPage;