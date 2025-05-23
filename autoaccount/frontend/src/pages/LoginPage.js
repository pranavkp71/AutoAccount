import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage() {
    const handleLogin = (token) => {
        console.log('Logged in with token:', token);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem'}}>
            <LoginForm onLogin={handleLogin}/>
        </div>
    );
}

export default LoginPage;