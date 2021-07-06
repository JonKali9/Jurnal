import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
    //Handle Login requests
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res => {
            if (res.ok) {
                return res.text()
                .then(secret => {
                    window.location = '/';
                    localStorage.setItem('session', secret);
                });
            } else {
                return res.text()
                .then(err => alert(err));
            }
        })
    }
    
    return (
        <div>
            <form>
                <h1>Login</h1>
                <label>Username</label>
                <input onChange={e => setUsername(e.target.value)} required></input> <br />
                <label>Password</label>
                <input onChange={e => setPassword(e.target.value)} type='password' required></input> <br />
                <button onClick={login}>Login</button>
                <Link to='./register'>
                    <p>Don't have an account? Register.</p>
                </Link>
            </form>
        </div>
    )
}
