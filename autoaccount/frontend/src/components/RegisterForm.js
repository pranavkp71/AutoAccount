import React, {useState} from "react";

function RegisterForm({onRegister}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            setError('Passwords do not match');
            return;
        }

        const response = await fetch('http://127.0.0.1:8000/api/accounts/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password}),
        });

        const data = await response.json();

        if (response.ok) {
            onRegister(); 
        } else {
            setError(data.detail || 'Registration faild');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h2>Register</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}

            <input
            type='text'
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />

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

            <input
            type='password'
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            />

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;