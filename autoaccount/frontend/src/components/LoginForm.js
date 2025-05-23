import React, {useState} from "react";

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://127.0.0.1:8000/api/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        const data = await response.json();

        if (response.ok) {
            onLogin(data.access); 
            localStorage.setItem('token', data.access);
        } else {
            setError('Invalid credentials');
        }
    };
    
    return (
        <form onSubmit={handlesubmit} className="login-form">
            <h2>Login</h2>
            {error && <p style={{ color: 'red'}}>{error}</p>}

            <input
                type='email'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required  
            />

            <input
                type='password'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required  
            />

            <button type='submit'>Login</button>

        </form>
    );
}

export default LoginForm